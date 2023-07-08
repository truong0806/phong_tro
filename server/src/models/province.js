'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      //   province.hasMany(models.Post, { foreignKey: 'provinceId', as: 'provinces' })
    }
  }
  Province.init(
    {
      code: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Province',
    },
  )
  return Province
}
