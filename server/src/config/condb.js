const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('phongtro123', 'root', 'truong911', {
  host: 'rds-mysql-phongtro123.cfaydlkzipx5.ap-southeast-1.rds.amazonaws.com',
  dialect: 'mysql',
})

const connectDb = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
export default connectDb
