const sequelize = require('../config/connection');
const { Menu } = require('../models');

const menudata = [
    {
        restaurantid: 1
    }
];

const seedMenus = () => Menu.bulkCreate(menudata, {individualHooks: true});

module.exports = seedMenus;