'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
    //   Price.hasMany(models.Post, { foreignKey: 'priceId', as: 'prices' })
    }
  }
  Price.init(
    {
      code: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Price',
      charset: 'utf8',
      collate: 'utf8_unicode_ci'
    },
  )
  return Price
}
