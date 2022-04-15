const { MenuProduct } = require('../models');

const menuproductdata = [
    {
        menu_id: 1,
        product_id: 1
    },
    {
        menu_id: 1,
        product_id: 2
    },
    {
        menu_id: 1,
        product_id: 3
    }
];

const seedMenuProducts = () => MenuProduct.bulkCreate(menuproductdata, {individualHooks: true});

module.exports = seedMenuProducts;