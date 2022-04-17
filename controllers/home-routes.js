const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Restaurant } = require('../models');

// get homepage
router.get('/', (req, res) => {
    console.log('======================');
    User.findAll({
    attributes: [
        'id',
        'first_name',
        'last_name',
    ],
    })
    .then(dbPostData => {
        const users = dbPostData.map(user => user.get({ plain: true }));

        res.render('homepage', { 
            users,
            loggedIn: req.session.loggedIn,
            isOwner: req.session.isOwner
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/owner-login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('owner-login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

router.get('/owner-signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('owner-signup');
});

router.get('/update-user', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    if (!req.session.isOwner) {
        res.render('update-user', {
            loggedIn: req.session.loggedIn,
            id: req.session.user_id
        });
    } else {
        console.log('======================');
        Restaurant.findAll({
            attributes: [
                'id',
                'name',
                'address',
                'phone_number',
                'open_at',
                'close_at',
                'owner_id'
            ]
        })
        .then(restaurantData => {
            restaurantData.forEach(element => {
                element.dataValues.current_owner = req.session.user_id;
            });
            const restaurants = restaurantData.map(restaurant => restaurant.get({ plain: true}));

            res.render('update-user', {
                restaurants,
                loggedIn: req.session.loggedIn,
                isOwner: req.session.isOwner,
                id: req.session.user_id
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
});

module.exports = router;
