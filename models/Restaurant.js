const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Restaurant extends Model {}

Restaurant.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        open_at:{
            type: DataTypes.TIME,
            allowNull: false
        },
        close_at:{
            type: DataTypes.TIME,
            allowNull: false
        },
        id_image:{
            type: DataTypes.INTEGER,
            references: {
                model: 'image',
                key: 'id'
            },
            allowNull: true
        }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'product'
    }
);


module.exports = Restaurant;