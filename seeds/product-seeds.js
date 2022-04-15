const sequelize = require('../config/connection');
const { Product } = require('../models');

const productdata = [
    {
        name: 'Product One',
        price: 10.00,
        description: 'This is a fake product for testing.'
    },
    {
        name: 'Product Two',
        price: 12.00,
        description: 'This is a fake product for testing.'
    },
    {
        name: 'Product One',
        price: 5.00,
        description: 'This is a fake product for testing.'
    }
];

const seedProducts = () => Product.bulkCreate(productdata, {individualHooks: true});

module.exports = seedProducts;