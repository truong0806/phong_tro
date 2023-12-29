'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'id',
        as: 'orders',
      })
    }
  }
  Order.init(
    {
      userId: DataTypes.STRING,
      balance: DataTypes.STRING,
      paymentMethod: DataTypes.STRING,
      status: DataTypes.STRING,
      note: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Order',
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    },
  )
  return Order
}
