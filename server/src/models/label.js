'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class label extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      label.hasOne(models.Post, {
        foreignKey: 'labelCode',
        as: 'labels',
      })
    }
  }
  label.init(
    {
      code: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Label',
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    },
  )
  return label
}
