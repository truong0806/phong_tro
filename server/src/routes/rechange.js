import * as rechangeController from '../controllers/rechangeController'
import express from 'express'
import requireToken from '../middleware/requireToken'
import moment from 'moment'
let config = require('config')
import db from '../models'
import { v4 as v4 } from 'uuid'
import { randomSixDigitNumber } from '../ultils/generateId6'
import { sortObjectVnpay } from '../ultils/sortObjectVnpay'

const router = express.Router()
router.post('/create_payment_url', requireToken, rechangeController.createPayment)
router.get('/vnpay_ipn', rechangeController.paymentResults)
router.get('/historyrecharge', requireToken, rechangeController.historyRecharge)



router.get('/vnpay_return', requireToken, function (req, res, next) {
  let vnp_Params = req.query
  console.log('🚀 ~ file: rechange.js:69 ~ vnp_Params:', vnp_Params)

  let secureHash = vnp_Params['vnp_SecureHash']
  let orderId = vnp_Params['vnp_TxnRef']
  let responeCode = vnp_Params['vnp_ResponseCode']
  console.log('🚀 ~ file: rechange.js:91 ~ orderId:', orderId)

  delete vnp_Params['vnp_SecureHash']
  delete vnp_Params['vnp_SecureHashType']

  vnp_Params = sortObjectVnpay(vnp_Params)

  let config = require('config')
  let tmnCode = config.get('vnp_TmnCode')
  let secretKey = config.get('vnp_HashSecret')

  let querystring = require('qs')
  let signData = querystring.stringify(vnp_Params, { encode: false })
  console.log('🚀 ~ file: rechange.js:84 ~ signData:', signData)
  let crypto = require('crypto')
  let hmac = crypto.createHmac('sha512', secretKey)
  let signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex')

  if (secureHash === signed) {
    //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua

    res.render('success', { code: vnp_Params['vnp_ResponseCode'] })
  } else {
    res.render('success', { code: '97' })
  }
})




export default router
