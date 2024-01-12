import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()
const port =
  process.env.NODE_ENV === 'production'
    ? process.env.PORT_PRO
    : process.env.PORT_DEV
import initRoutes from './src/routes'
import { checkOtpExpiredRunEvery1min } from './src/middleware/checkOtpExpired'
import morgan from 'morgan'
import { checkRechargeExpiredRunEvery1min } from './src/middleware/checkRechargeExpired'

app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
const allowedOrigins = [
  process.env.NODE_ENV === 'production'
    ? process.env.CLIENT_PRO
    : process.env.CLIENT_DEV,
  'https://truongnguyen869.click',
  'https://sandbox.vnpayment.vn',
]
app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is in the allowed list, or if it's a non-browser request
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
  }),
)

checkOtpExpiredRunEvery1min.invoke()
checkRechargeExpiredRunEvery1min.invoke()
// updateCategoryCount()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
initRoutes(app)
app.use('/', (req, res) => {
  res.send('Server is up and running')
})

// app.listen(portApi, () => {
//   console.log(`Server swaggerUi running on http://localhost:${portApi}`)
// })
// const server = https.createServer(options, (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.end('Hello, world!')
// })
// app.listen(3030, () => {
//   console.log('Server running on port 443')
// })
app.listen(port, () => {
  console.log('Server: http://localhost:' + port)
  console.log(
    'Client: ' + process.env.NODE_ENV === 'production'
      ? process.env.CLIENT_PRO
      : process.env.CLIENT_DEV,
  )
})
