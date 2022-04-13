const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

// get all posts for homepage
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

        res.render('homepage', { users });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;