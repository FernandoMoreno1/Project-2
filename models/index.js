// import all models
const User = require('./User');
const Owner = require('./Owner');
const Menu = require('./Menu');
const Restaurant = require('./Restaurant');
const Product = require('./Product');
const MenuProduct = require('./MenuProduct');

// create associations
Owner.hasMany(Restaurant);

Restaurant.belongsTo(Owner);

Restaurant.hasOne(Menu);

Menu.belongsTo(Restaurant);

Menu.belongsToMany(Product,
    {
        through: MenuProduct,
        as: 'product_menu',
        foreignKey: 'menu_id',
        onDelete: 'SET NULL'
    });

Product.belongsToMany(Menu,
    {
        through: MenuProduct,
        as: 'menu_product',
        foreignKey: 'product_id',
        onDelete: 'SET NULL'
    });

module.exports = {
    User,
    Restaurant,
    Owner,
    Menu,
    Product,
    MenuProduct
};
