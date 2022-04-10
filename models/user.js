const { Model, DataTypes } = require('sequelize');
//este archivo no existe aun
const sequelize = require('../connection/database');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
    },
    address:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    number:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    role:{
        type: DataTypes.ENUM('Customer','ROwner'),
        allowNull: false
    },
    profileState:{
        type: DataTypes.ENUM('incomplete','complete'),
        defaultValue: "incomplete"
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
    modelName: 'user'
  }
);

module.exports = User;
