'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    // static associate(models) {
    //   Location.hasOne(models.Post, {
    //     foreignKey: 'locationId',
    //     as: 'locations',
    //   })
    // }
  }
  Location.init(
    {
      lng: DataTypes.STRING,
      lng: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Location',
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    },
  )
  return Location
}
