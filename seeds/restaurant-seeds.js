const sequelize = require('../config/connection');
const { Restaurant } = require('../models');

const restaurantData = [
    {
        name: 'John Food & Drinks',
        address: '802 RoundC Street',
        phone_number: '945678901',
        open_at: '09:00',
        close_at: '18:00',
        id_image: 2
    },
    {
        name: 'Subway',
        address: '52 StreetC',
        phone_number: '328678921',
        open_at: '09:00',
        close_at: '18:00',
        id_image: 1
    },
    {
        name: 'Chicken Roast',
        address: '224 RoundC Street',
        phone_number: '241212901',
        open_at: '14:00',
        close_at: '22:00',
        id_image: 3
    },
    {
        name: 'Mers Pizzas',
        address: '1030 LogQ Street',
        phone_number: '237568981',
        open_at: '13:00',
        close_at: '21:00',
        id_image: 4
    },
];

const seedRestaurants = () => Restaurant.bulkCreate(restaurantData);

module.exports = seedRestaurants;