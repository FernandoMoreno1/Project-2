const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

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
            loggedIn: req.session.loggedIn
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

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

router.get('/update-user', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('update-user');
});

module.exports = router;
