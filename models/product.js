const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    restaurant_id:{
      type: DataTypes.INTEGER,
        references: {
            model: 'restaurant',
            key: 'id'
        }
    },
    image_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'image',
            key: 'id'
        }
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
    },
    sold: { 
      type: DataTypes.INTEGER, 
      default: 0 
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

module.exports = Product;