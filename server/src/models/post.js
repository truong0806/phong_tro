'use strict'
const { Model } = require('sequelize')
module.exports = async (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Images, {
        foreignKey: 'imagesId',
        targetKey: 'id',
        as: 'images',
      })
      Post.belongsTo(models.Attribute, {
        foreignKey: 'attributesId',
        targetKey: 'id',
        as: 'attributes',
      })
      Post.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'id',
        as: 'users',
      })
      // Post.belongsTo(models.Label, {
      //   foreignKey: 'labelCode',
      //   targetKey: 'id',
      //   as: 'label',
      // })
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      star: DataTypes.STRING,
      labelCode: DataTypes.STRING,
      address: DataTypes.STRING,
      attributesId: DataTypes.STRING,
      categoryCode: DataTypes.STRING,
      priceCode: DataTypes.STRING,
      areaCode: DataTypes.STRING,
      description: DataTypes.TEXT,
      userId: DataTypes.STRING,
      overviewId: DataTypes.STRING,
      imagesId: DataTypes.STRING,
<<<<<<< Updated upstream
=======
      createdAt: DataTypes.DATE,
>>>>>>> Stashed changes
    },
    {
      sequelize,
      modelName: 'Post',
    },
  )
  return Post
}
