import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()
import initRoutes from './src/routes'
import { checkOtpExpiredRunEvery1min } from './src/middleware/checkOtpExpired'
import morgan from 'morgan'
import { checkRechargeExpiredRunEvery1min } from './src/middleware/checkRechargeExpired'
let port = process.env.PORT_PRO

app.use(
  process.env.NODE_ENV === 'production' ? morgan('combined') : morgan('dev'),
)
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
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

checkOtpExpiredRunEvery1min.invoke()
checkRechargeExpiredRunEvery1min.invoke()
// updateCategoryCount()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
initRoutes(app)
app.use('/', (req, res) => {
  res.send('Server is running')
})

app.listen(port, () => {
  console.log('Server: http://localhost:' + port)
  console.log('Client: ' + process.env.CLIENT_PRO)
})
