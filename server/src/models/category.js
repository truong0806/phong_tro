'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category.init(
    {
      code: DataTypes.STRING,
      value: DataTypes.STRING,
      header: DataTypes.STRING,
      subheader: DataTypes.STRING,
<<<<<<< Updated upstream
      count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
=======
>>>>>>> Stashed changes
    },
    {
      sequelize,
      modelName: 'Category',
    },
  )
  return category
}
