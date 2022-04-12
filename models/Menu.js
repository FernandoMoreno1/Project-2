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
        },
        restaurant_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'restaurant',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'menu'
    }
);

module.exports = Menu;