// import all models
const User = require('./User');
const Order = require('./order');
const Product = require('./product');
const Owner = require('./Owner');
const Restaurant = require('./Restaurant')
const Image = require('./image');
const Category = require('./category');

// create associations
User.hasMany(Order,{
    foreignKey: 'user_id'
});

Owner.hasMany(Restaurant);

Restaurant.hasMany(Product, {
    foreignKey: 'restaurant_id'
});

Product.belongsTo(Restaurant,{
    foreignKey: 'restaurant_id',
    onDelete: 'SET NULL'
});

Order.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Restaurant.belongsTo(Image,{
    foreignKey: 'image_id',
    onDelete: 'SET NULL'
});

Restaurant.belongsTo(Category,{
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});

Product.belongsTo(Image,{
    foreignKey: 'image_id',
    onDelete: 'SET NULL'
});

module.exports = {
    User,
    Restaurant,
    Category,
    Image,
    Product,
    Order,
    Owner
};
