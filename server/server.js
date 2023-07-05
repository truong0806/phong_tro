import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT || 8888
const swaggerUI = require('swagger-ui-express')
const docs = require('./doc')
import initRoutes from './src/routes'
import requireToken from './src/middleware/requireToken'
import updateCategoryCount from './src/ultils/updateCategoryCount'

//app.use(requireToken)
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
)
updateCategoryCount()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
initRoutes(app)
app.use('/', (req, res) => {
  res.send('Server is up and running')
})

// app.listen(portApi, () => {
//   console.log(`Server swaggerUi running on http://localhost:${portApi}`)
// })

app.listen(port, () => {
  console.log('Server: http://localhost:' + port)
  console.log('Client: ' + process.env.CLIENT_URL)
})
