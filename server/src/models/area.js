'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {}
  }
  Area.init(
    {
      code: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Area',
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    },
  )
  return Area
}
