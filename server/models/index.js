'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const { user, post, comment, tags, post_image, post_contents, post_post_image, post_post_contents } = sequelize.models;

post.belongsTo(user);
user.hasMany(post);

comment.belongsTo(user);
user.hasMany(comment);

comment.belongsTo(post);
post.hasMany(comment);

tags.belongsTo(post);
post.hasMany(tags);

post_post_image.belongsTo(post);
post.hasMany(post_post_image);

post_post_contents.belongsTo(post);
post.hasMany(post_post_contents);

post_post_image.belongsTo(post_image);
post_image.hasMany(post_post_image);

post_post_contents.belongsTo(post_contents);
post_contents.hasMany(post_post_contents);

module.exports = db;
