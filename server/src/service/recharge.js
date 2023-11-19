import moment from 'moment'
import db, { sequelize } from '../models'
import { sortObjectVnpay } from '../ultils/sortObjectVnpay'
import { randomSixDigitNumber } from '../ultils/generateId6'
import config from 'config'

export const getHistoryRecharge = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Order.findAll({
        where: {
          userId: id,
        },
        raw: true,
        order: [
          ['createdAt', 'DESC'], // Sắp xếp theo cột 'createdAt' theo thứ tự giảm dần
        ],
        attributes: [
          'id',
          'userId',
          [
            sequelize.fn(
              'date_format',
              sequelize.col('createdAt'),
              '%Y-%m-%d %H:%i:%s',
            ),
            'createdAt',
          ],

          'balance',
          'paymentMethod',
          'status',
          'note',
        ],
      })
      if (response) {
        resolve({
          err: 0,
          response,
        })
      }
    } catch (error) {
      reject(error)
    }
  })

export const createPaymentService = (id, req, res) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log('🚀 ~ file: rechange.js:12 ~ idUser:', id)
      console.log('🚀 ~ file: rechange.js:8 ~ req:', req.body)
      process.env.TZ = 'Asia/Ho_Chi_Minh'

      let date = new Date()
      let createDate = moment(date).format('YYYYMMDDHHmmss')
      let idOrder = `${randomSixDigitNumber()}`
      let ipAddr =
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress

      let tmnCode = config.get('vnp_TmnCode')
      let secretKey = config.get('vnp_HashSecret')
      let vnpUrl = config.get('vnp_Url')
      let returnUrl = config.get('vnp_ReturnUrl')
      let amount = req.body.amount
      let bankCode = req.body.bankCode
      let paymenMethod = req.body.paymenMethod

      let locale = 'vn'
      if (locale === null || locale === '') {
        locale = 'vn'
      }
      let currCode = 'VND'
      let vnp_Params = {}
      vnp_Params['vnp_Version'] = '2.1.0'
      vnp_Params['vnp_Command'] = 'pay'
      vnp_Params['vnp_TmnCode'] = tmnCode
      vnp_Params['vnp_Locale'] = locale
      vnp_Params['vnp_CurrCode'] = currCode
      vnp_Params['vnp_TxnRef'] = idOrder
      vnp_Params['vnp_OrderInfo'] = 'Thanh toan cho don hang:' + idOrder
      vnp_Params['vnp_OrderType'] = 'other'
      vnp_Params['vnp_Amount'] = amount * 100
      vnp_Params['vnp_ReturnUrl'] = returnUrl
      vnp_Params['vnp_IpAddr'] = ipAddr
      vnp_Params['vnp_CreateDate'] = createDate
      if (bankCode !== null && bankCode !== '') {
        vnp_Params['vnp_BankCode'] = bankCode
      }

      vnp_Params = sortObjectVnpay(vnp_Params)

      let querystring = require('qs')
      let signData = querystring.stringify(vnp_Params, { encode: false })
      console.log('🚀 ~ file: order.js:81 ~ signData:', signData)

      let crypto = require('crypto')
      let hmac = crypto.createHmac('sha512', secretKey)
      let signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex')

      vnp_Params['vnp_SecureHash'] = signed
      vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false })

      const order = await db.Order.findOrCreate({
        where: {
          id: idOrder,
        },
        defaults: {
          id: idOrder,
          userId: id,
          paymentMethod: paymenMethod,
          balance: amount,
          status: '0',
        },
      })
      if (order) {
        console.log('🚀 ~ file: recharge.js:80 ~ newPromise ~ vnpUrl:', vnpUrl)
        resolve({ err: 0, url: vnpUrl })
      }
    } catch (error) {
      reject(error)
    }
  })

export const paymentResults = (req, res) =>
  new Promise(async (resolve, reject) => {
    try {
      let vnp_Params = req.query
      console.log('🚀 ~ file: rechange.js:120 ~ vnp_Params:', vnp_Params)
      let secureHash = vnp_Params['vnp_SecureHash']

      let rspCode = vnp_Params['vnp_ResponseCode']
      let checkOrderId = vnp_Params['vnp_TxnRef']
      delete vnp_Params['vnp_SecureHash']
      delete vnp_Params['vnp_SecureHashType']

      vnp_Params = sortObjectVnpay(vnp_Params)
      let config = require('config')
      let secretKey = config.get('vnp_HashSecret')
      let querystring = require('qs')
      let signData = querystring.stringify(vnp_Params, { encode: false })
      let crypto = require('crypto')
      let hmac = crypto.createHmac('sha512', secretKey)
      let signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex')

      let order = await db.Order.findOne({ where: { id: checkOrderId } }) // Giả sử '0' là trạng thái khởi tạo giao dịch, chưa có IPN. Trạng thái này được lưu khi yêu cầu thanh toán chuyển hướng sang Cổng thanh toán VNPAY tại đầu khởi tạo đơn hàng.
      //let paymentStatus = '1'; // Giả sử '1' là trạng thái thành công bạn cập nhật sau IPN được gọi và trả kết quả về nó
      console.log('🚀 ~ file: rechange.js:141 ~ paymentStatus:', order)
      //let paymentStatus = '2'; // Giả sử '2' là trạng thái thất bại bạn cập nhật sau IPN được gọi và trả kết quả về nó

      // Mã đơn hàng "giá trị của vnp_TxnRef" VNPAY phản hồi tồn tại trong CSDL của bạn
      let checkAmount = +vnp_Params['vnp_Amount'] // Kiểm tra số tiền "giá trị của vnp_Amout/100" trùng khớp với số tiền của đơn hàng trong CSDL của bạn
      if (secureHash === signed) {
        //kiểm tra checksum
        if (checkOrderId) {
          if (checkAmount) {
            if (order.status == '0') {
              //kiểm tra tình trạng giao dịch trước khi cập nhật tình trạng thanh toán
              if (rspCode == '00') {
                //thanh cong
                //paymentStatus = '1'
                // Ở đây cập nhật trạng thái giao dịch thanh toán thành công vào CSDL của bạn
                const updated = await db.Order.update(
                  {
                    status: '1',
                  },
                  {
                    where: {
                      id: checkOrderId,
                    },
                  },
                )
                console.log('🚀 ~ file: rechange.js:165 ~ res:', res)
                if (updated) {
                  const user = await db.User.findOne({
                    where: { id: order.userId },
                  })
                  console.log(
                    '🚀 ~ file: rechange.js:169 ~ order.userId:',
                    order.userId,
                  )
                  const balance = +user.balance
                  console.log('🚀 ~ file: rechange.js:168 ~ user:', user)
                  if (user) {
                    const res1 = await db.User.update(
                      {
                        balance: +user.balance + checkAmount / 100,
                      },
                      {
                        where: {
                          id: order.userId,
                        },
                      },
                    )
                    if (res1) {
                      // res.status(200).json({
                      //   err: '0',
                      //   Message: 'Success',
                      //   url: 'http://localhost:3000/quan-ly/nap-tien',
                      // })
                      resolve(
                        res.redirect('http://localhost:3000/quan-ly/nap-tien'),
                      )
                    }
                  }
                }
              } else {
                //that bai
                //paymentStatus = '2'
                const updated = await db.Order.update(
                  {
                    status: '2',
                  },
                  {
                    where: {
                      id: checkOrderId,
                    },
                  },
                )
                if (updated) {
                  resolve(
                    res.status(200).json({ RspCode: '0', Message: 'False' }),
                  )
                }
              }
            } else {
              resolve(
                res.status(200).json({
                  RspCode: '02',
                  Message: 'This order has been updated to the payment status',
                }),
              )
            }
          } else {
            resolve(
              res
                .status(200)
                .json({ RspCode: '04', Message: 'Amount invalid' }),
            )
          }
        } else {
          resolve(
            res.status(200).json({ RspCode: '01', Message: 'Order not found' }),
          )
        }
      } else {
        resolve(
          res.status(200).json({ RspCode: '97', Message: 'Checksum failed' }),
        )
      }
    } catch (error) {
      reject(error)
    }
  })
