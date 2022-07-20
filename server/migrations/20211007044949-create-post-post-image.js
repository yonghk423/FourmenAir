'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post_post_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // post < user
    await queryInterface.addColumn(
      'posts',
      'userId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    );

    // comment < user
    await queryInterface.addColumn(
      'comments',
      'userId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    );

    // comment < post
    await queryInterface.addColumn(
      'comments',
      'postId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'posts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    );

    // tags < post
    await queryInterface.addColumn(
      'tags',
      'postId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'posts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    );

    // post_post_contents < post
    await queryInterface.addColumn(
      'post_post_contents',
      'postId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'posts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    );

    // post_post_contents < post_contents
    await queryInterface.addColumn(
      'post_post_contents',
      'postContentId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'post_contents',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    );

    // post_post_image < post
    await queryInterface.addColumn(
      'post_post_images',
      'postId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'posts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    );

    // post_post_image < post_image
    await queryInterface.addColumn(
      'post_post_images',
      'postImageId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'post_images',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('post_post_images');
  }
};