const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant } = require('../models');

// get restaurants
router.get('/', (req, res) => {
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
            restaurants,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/add-restaurant', (req, res) => {
    if (!req.session.isOwner) {
        res.redirect('/');
        return;
    }

    res.render('add-restaurant', {
        id: req.session.user_id,
        loggedIn: req.session.loggedIn,
        isOwner: req.session.isOwner
    });
});

module.exports = router;