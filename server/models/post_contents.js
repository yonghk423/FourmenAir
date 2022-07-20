'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // post_contents.hasMany(models.post_post_contents, {
      //   foreignKey: 'postContentId',
      //   as: 'post_post_contents'
      // });
    }
  };
  post_contents.init({
    contents: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post_contents',
  });
  return post_contents;
};