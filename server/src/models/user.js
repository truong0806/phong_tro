'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, { foreignKey: 'userId', as: 'users' })
    }
    static associate(models) {
      User.hasOne(models.RefreshToken, {
        foreignKey: 'id',
        as: 'users',
      })
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      zalo: DataTypes.STRING,
      fbUrl: DataTypes.STRING,
      avatar: DataTypes.BLOB,
      publickey: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'User',
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    },
  )
  return User
}
