const sequelize = require('../config/connection');
const { Image } = require('../models');

const ImagesData = [
    {
        route: 'https://png.pngtree.com/png-vector/20200729/ourmid/pngtree-small-restaurant-building-vector-with-flat-design-png-image_2316583.jpg'
    },
    {
        route: 'https://png.pngtree.com/png-clipart/20190921/original/pngtree-flat-color-restaurant-shop-decoration-png-image_4727637.jpg'
    },
    {
        route: 'https://cdn-icons-png.flaticon.com/512/1996/1996068.png'
    },
    {
        route: 'https://cdn-icons-png.flaticon.com/512/3310/3310748.png'
    },
];

const seedImages = () => Image.bulkCreate(ImagesData);

module.exports = seedImages;