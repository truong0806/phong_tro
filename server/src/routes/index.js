import authRouter from './auth'
import insertRouter from './insert'
import categoryRouter from './category'
import postRouter from './post'
import priceRouter from './prices'
import areaRouter from './areas'
import provinceRouter from './province'
import userRouter from './user'
import rechargeRouter from './rechange'
import createHttpError from 'http-errors'
const swaggerUI = require('swagger-ui-express')
const docs = require('../../doc')

const initRoutes = (app) => {
  app.use('/api/v1/auth', authRouter)
  app.use('/api/v1/insert', insertRouter)
  app.use('/api/v1/category', categoryRouter)
  app.use('/api/v1/post', postRouter)
  app.use('/api/v1/price', priceRouter)
  app.use('/api/v1/area', areaRouter)
  app.use('/api/v1/province', provinceRouter)
  app.use('/api/v1/user', userRouter)
  app.use('/api/v1/recharge', rechargeRouter)
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))
  app.use((req, res, next) => {
    next(createHttpError.NotFound('This route does not exist'))
  })

  return app.use((err, req, res, next) => {
    res.json({
      status: err.status || 500,
      message: err.message,
    })
  })
}

export default initRoutes
