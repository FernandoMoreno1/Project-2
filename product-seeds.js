const sequelize = require('../config/connection');
const { Product } = require('../models');

const productData = [
    {
        name: 'Orange Juice',
        price: 3.98,
        description: '500ml drink',
        id_restuarant: 1,
        id_image: 1,
        id_caterory: 1,
        isActive: true
    },
    {
        name: 'Chocolate IceCream',
        price: 2.99,
        description: 'made it with yogurt',
        id_restuarant: 1,
        id_image: 1,
        id_caterory: 2,
        isActive: true
    },
    {
        name: 'Chicken Salad',
        price: 7.23,
        description: 'with extra chicken',
        id_restuarant: 1,
        id_image: 3,
        id_caterory: 3,
        isActive: true
    },
    {
        name: 'Hamburger',
        price: 5.52,
        description: 'With cheese',
        id_restuarant: 1,
        id_image: 2,
        id_caterory: 4,
        isActive: true
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;