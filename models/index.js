// import all models
const User = require('./User');
const Menu = require('./Menu');
const Restaurant = require('./Restaurant');

// create associations
Restaurant.hasOne(Menu, {
    foreignKey: 'restaurant_id',
    onDelete: 'SET NULL'
});

Menu.belongsTo(Restaurant, {
    foreignKey: 'menu_id',
    onDelete: 'SET NULL'
})


module.exports = {
    User,
    Menu,
    Restaurant
};
