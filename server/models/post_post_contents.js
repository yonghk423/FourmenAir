'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_post_contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // post_post_contents.belongsTo(models.post, {
      //   foreignKey: 'postId'
      // });

      // post_post_contents.belongsTo(models.post_contents, {
      //   foreignKey: 'postContentId'
      // });
    }
  };
  post_post_contents.init({
  }, {
    sequelize,
    modelName: 'post_post_contents',
  });
  return post_post_contents;
};