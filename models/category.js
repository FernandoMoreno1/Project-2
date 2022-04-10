const { Model, DataTypes } = require('sequelize');
//este archivo no existe aun
const sequelize = require('../connection/database');

class Category extends Model {}

Category.init(
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
    description:{
        type: DataTypes.STRING,
        allowNull: true
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
    modelName: 'category'
  }
);

module.exports = Category;