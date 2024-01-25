import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
const schedule = require('node-schedule')
dotenv.config()
const app = express()
const port = process.env.PORT || 8888
const swaggerUI = require('swagger-ui-express')
const docs = require('./doc')
import initRoutes from './src/routes'
import requireToken from './src/middleware/requireToken'
import checkExpiredRefeshToken from './src/middleware/checkExpiredRefeshToken'
import updateCategoryCount from './src/ultils/updateCategoryCount'
import generateDate from './src/ultils/generateDate'
import { checkOtpExpiredRunEvery1min } from './src/middleware/checkOtpExpired'
import morgan from 'morgan'
import { checkRechargeExpiredRunEvery1min } from './src/middleware/checkRechargeExpired'
import createHttpError from 'http-errors'
// const options = {
//   key: fs.readFileSync(path.join(__dirname, 'src/ultils/key', 'localhost.key')),
//   cert: fs.readFileSync(
//     path.join(__dirname, 'src/ultils/key', 'localhost.crt'),
//   ),
// }
// app.use(requireToken)
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
const allowedOrigins = [
  'https://phongtro.truongnguyen869.click',
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
  console.log('Client: ' + process.env.CLIENT_URL)
})
