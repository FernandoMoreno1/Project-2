const router = require('express').Router();
const sequelize = require('../config/connection');
const { Menu } = require('../models');

// get menu
router.get('/', (req, res) => {
    console.log('======================');
    Menu.findAll({
    attributes: [
        'id',
    ],
    })
    .then(menuData => {
        const menus = menuData.map(menu => menu.get({ plain: true }));

        res.render('menu', { menus });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;