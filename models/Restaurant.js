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
        open_at:{
            type: DataTypes.TIME,
            allowNull: false
        },
        close_at:{
            type: DataTypes.TIME,
            allowNull: false
        },
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'owner',
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