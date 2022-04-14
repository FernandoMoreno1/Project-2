// import all models
const User = require('./User');
const Restaurant = require('./Restaurant');
const Image = require('./Image');
const Category = require('./Category');
const Order = require('./Order');
const Product = require('./Product');

// create associations

Restaurant.hasMany(Product, {
    foreignKey: 'id_restaurant'
});

Product.belongsTo(Restaurant,{
    foreignKey: 'id_restaurant',
    onDelete: 'SET NULL'
});

Product.belongsTo(Category,{
    foreignKey: 'id_category',
    onDelete: 'SET NULL'
});

Product.belongsTo(Image,{
    foreignKey: 'id_Image',
    onDelete: 'SET NULL'
});

Order.belongsTo(Restaurant,{
    foreignKey: 'id_restaurant',
    onDelete: 'SET NULL'
});

Order.belongsTo(User,{
    foreignKey: 'id_user',
    onDelete: 'SET NULL'
});

module.exports = {
    User,
    Category,
    Image,
    Restaurant,
    Order,
    Product
};
