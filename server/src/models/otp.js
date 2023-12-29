'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Otp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {}
  }
  Otp.init(
    {
      phone: DataTypes.STRING,
      otp: DataTypes.STRING,
      expiresAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Otp',
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    },
  )
  return Otp
}
