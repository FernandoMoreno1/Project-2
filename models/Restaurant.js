const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Restaurant model
class Restaurant extends Model {}

Restaurant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'owner',
                key: 'id'
            }
        },
        menu_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'menu',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'restaurant'
    }
);

module.exports = Restaurant;