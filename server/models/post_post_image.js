'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_post_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // post_post_image.belongsTo(models.post, {
      //   foreignKey: 'postId'
      // });

      // post_post_image.belongsTo(models.post_image, {
      //   foreignKey: 'postImageId'
      // });
    }
  };
  post_post_image.init({
  }, {
    sequelize,
    modelName: 'post_post_image',
  });
  return post_post_image;
};