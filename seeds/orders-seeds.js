const sequelize = require('../config/connection');
const { Order } = require('../models');

const ordersData = [
    {
        id_user: 1,
        id_restaurant: 1,
        total: 8,
        description: [
            {
              product: {
                name: 'Orange Juice',
                price: 3.98,
              },
              quantity: 2,
              total: 7.96,
            },
        ],
        state: 'process',
        finished: false
    },
    {
        id_user: 4,
        id_restaurant: 1,
        total: 4,
        description: [
            {
              product: {
                name: 'Orange Juice',
                price: 3.98,
              },
              quantity: 1,
              total: 3.98,
            },
        ],
        state: 'process',
        finished: false
    },
    {
        id_user: 2,
        id_restaurant: 2,
        total: 3,
        description: [
            {
              product: {
                name: 'Chocolate IceCream',
                price: 2.99,
              },
              quantity: 1,
              total: 2.99,
            },
        ],
        state: 'delivery',
        finished: true
    },
    {
        id_user: 3,
        id_restaurant: 3,
        total: 22,
        description: [
            {
              product: {
                name: 'Chicken Salad',
                price: 7.23,
              },
              quantity: 3,
              total: 21.69,
            },
        ],
        state: 'process',
        finished: false
    },
];

const seedOrders = () => Order.bulkCreate(ordersData);

module.exports = seedOrders;