const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MenuProduct extends Model {}

MenuProduct.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
            menu_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'menu',
                key: 'id'
            }
        },
            product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'menuproduct'
    }
);

module.exports = MenuProduct;