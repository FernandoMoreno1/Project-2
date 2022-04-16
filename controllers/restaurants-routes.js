const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant } = require('../models');

// get restaurants
router.get('/', (req, res) => {
    console.log('======================');
    Restaurant.findAll({
        attributes: [
            'id',
            'name',
            'address',
            'phone_number',
            'open_at',
            'close_at'
        ]
    })
    .then(restaurantData => {
        const restaurants = restaurantData.map(restaurant => restaurant.get({ plain: true}));

        res.render('restaurants', {
            restaurants
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;