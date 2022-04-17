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
    total:{
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // [
    //     {
    //       product: {
    //         name: { type: DataTypes.STRING, allowNull: false },
    //         price: { type: DataTypes.DECIMAL, default: 0 },
    //       },
    //       quantity: { type: Number, default: 1 },
    //       total: { type: DataTypes.DECIMAL, default: 0 },
    //     },
    // ],
    state:{
      type: DataTypes.ENUM("delivery","on way","process"),
      defaultValue: "process",
      allowNull: false
    },
    finished:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
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