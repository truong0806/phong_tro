'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Images.hasOne(models.Post, {
        foreignKey: 'imagesId',
        unique: true,
      })
    }
  }
  Images.init(
    {
      image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Images',
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    },
  )
  return Images
}
