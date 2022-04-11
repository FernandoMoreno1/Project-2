const sequelize = require('../config/connection');
const { Category } = require('../models');

const categoryData = [
    {
        name: 'Drinks',
        description: 'Juices, Soda, Water',
        isActive: true
    },
    {
        name: 'IceCream',
        description: 'Best ice creams in the town',
        isActive: true
    },
    {
        name: 'Chicken',
        description: 'All types of chicken',
        isActive: true
    },
    {
        name: 'Hamburgers',
        description: 'All types of hamburgers',
        isActive: true
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;