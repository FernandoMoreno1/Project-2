const { Model, DataTypes } = require('sequelize');
//este archivo no existe aun
const sequelize = require('../connection/database');

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
    image:{
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