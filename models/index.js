// import all models
const User = require('./User');
const Owner = require('./Owner');
const Menu = require('./Menu');
const Restaurant = require('./Restaurant');

// create associations
Owner.hasOne(Restaurant);

Restaurant.belongsTo(Owner);

Restaurant.hasOne(Menu);

Menu.belongsTo(Restaurant);

module.exports = {
    User,
    Restaurant,
    Owner,
    Menu,
};
