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
    id_restuarant:{
      type: DataTypes.INTEGER,
        references: {
            model: 'restaurant',
            key: 'id'
        },
        allowNull: true
    },
    id_image:{
        type: DataTypes.INTEGER,
        references: {
            model: 'image',
            key: 'id'
        },
        allowNull: true
    },
    id_category:{
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id'
        },
        allowNull: false
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        defaultValue:true,
        allowNull: false
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