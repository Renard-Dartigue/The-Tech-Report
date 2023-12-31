const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'archive',
                key: 'id',
            },
        },
        post_descrip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
    }
);

module.exports = Blog;