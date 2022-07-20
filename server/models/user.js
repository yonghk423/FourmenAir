'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // user.hasMany(models.post, {
      //   foreignKey: 'userId',
      //   as: 'posts'
      // });
      
      // user.hasMany(models.comment, {
      //   foreignKey: 'userId',
      //   as: 'comments'
      // });
    }
  };
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mobile: DataTypes.STRING,
    gender: DataTypes.STRING,
    image: DataTypes.STRING,
    salt: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};