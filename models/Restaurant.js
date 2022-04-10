// import all models
const Category = require('./category');
const User = require('./user');
const Image = require('./image');
const Order = require('./order');
const Product = require('./product');

// create associations
User.hasMany(Order, {
  foreignKey: 'id_user'
});

Order.belongsTo(User, {
  foreignKey: 'id_user',
  onDelete: 'SET NULL'
});

Category.belongsTo(Product, {
  foreignKey: 'id_category',
  onDelete: 'SET NULL'
});

Image.belongsTo(Product, {
  foreignKey: 'id_image',
  onDelete: 'SET NULL'
});

Image.hasMany(User, {
  foreignKey: 'id_image',
  onDelete: 'SET NULL'
});

module.exports = { Category, User, Image, Order, Product };