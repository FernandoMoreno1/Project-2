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
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
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
        image_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'image',
                key: 'id'
            },
            allowNull: true
        },
        category_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
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
      modelName: 'restaurant'
    }
);


module.exports = Restaurant;