const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
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
        hooks: {
        // set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newMenuData) {
            newMenuData.password = await bcrypt.hash(newMenuData.password, 10);
            return newMenuData;
        },

        async beforeUpdate(updatedMenuData) {
            updatedMenuData.password = await bcrypt.hash(updatedMenuData.password, 10);
            return updatedMenuData;
        }
        },
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'Menu'
    }
);

module.exports = Menu;