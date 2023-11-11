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

// const options = {
//   key: fs.readFileSync(path.join(__dirname, 'src/ultils/key', 'localhost.key')),
//   cert: fs.readFileSync(
//     path.join(__dirname, 'src/ultils/key', 'localhost.crt'),
//   ),
// }
// app.use(requireToken)
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    exposedHeaders: ['Content-Range'],
  }),
)

checkOtpExpiredRunEvery1min.invoke();
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
  console.log('Client: ' + process.env.CLIENT_URL)
})
