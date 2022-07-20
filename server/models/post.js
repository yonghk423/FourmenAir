'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // post.hasMany(models.comment, {
      //   foreignKey: 'postId',
      //   as: 'comments'
      // });

      // post.hasMany(models.tags, {
      //   foreignKey: 'postId',
      //   as: 'tags'
      // });

      // post.hasMany(models.post_post_image, {
      //   foreignKey: 'postId',
      //   as: 'post_post_images'
      // });

      // post.hasMany(models.post_post_contents, {
      //   foreignKey: 'postId',
      //   as: 'post_post_contents'
      // });

      // post.belongsTo(models.user, {
      //   foreignKey: 'userId'
      // });
    }
  };
  post.init({
    title: DataTypes.STRING,
    viewCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};