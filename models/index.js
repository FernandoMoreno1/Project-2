// import all models
const User = require('./User');
const Owner = require('./Owner');
const Menu = require('./Menu');
const Restaurant = require('./Restaurant');

// create associations

module.exports = {
    User,
    Restaurant,
    Owner,
    Menu,
};
