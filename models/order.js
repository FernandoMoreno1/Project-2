const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_user:{
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        },
        allowNull: false
    },
    id_restaurant:{
        type: DataTypes.INTEGER,
        references: {
            model: 'restaurant',
            key: 'id'
        },
        allowNull: false
    },
    total:{
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    description: [
        {
          product: {
            name: { type: DataTypes.STRING, allowNull: false },
            price: { type: DataTypes.DECIMAL, default: 0 },
          },
          quantity: { type: Number, default: 1 },
          total: { type: DataTypes.DECIMAL, default: 0 },
        },
    ],
    state:{
        type: DataTypes.ENUM('delivey','on way','process'),
        defaultValue: "process"
    },
    finished:{
        type: DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order'
  }
);

module.exports = Order;