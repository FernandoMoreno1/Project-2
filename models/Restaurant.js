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
            references: {
                model: 'user',
                key: 'id'
            }
        },
        menu_id: {
            references: {
                model: 'menu',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'restaurant'
    }
)