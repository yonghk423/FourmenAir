'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Post_image.hasMany(models.post_post_image, {
      //   foreignKey: 'postImageId',
      //   as: 'post_post_images'
      // });
    }
  };
  post_image.init({
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post_image',
  });
  return post_image;
};