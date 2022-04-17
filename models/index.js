// import all models
const User = require('./User');
const Restaurant = require('./Restaurant')
const Image = require('./Image');
const Category = require('./Category');
const Order = require('./Order');
const Product = require('./Product');

// create associations
User.hasMany(Order,{
    foreignKey: 'user_id'
});

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
    Order
};
