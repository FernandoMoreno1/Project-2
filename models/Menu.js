const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Menu model
class Menu extends Model {}

// create fields/columns for Menu model
Menu.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'menu'
    }
);

module.exports = Menu;