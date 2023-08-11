const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Archive extends Model {}

Archive.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'archive',
    }
);

module.exports = Archive;