const sequelize = require('../config/connection');
const { Restaurant } = require('../models');

const restaurantdata = [
    {
        name: 'Number One',
        address: 'Some Street',
        phone_number: '1234567890',
        open_at: '10:00:00',
        close_at: '22:00:00',
        owner_id: 1
    }
];

const seedRestaurants = () => Restaurant.bulkCreate(restaurantdata, {individualHooks: true});

module.exports = seedRestaurants;