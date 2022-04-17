const router = require('express').Router();
const sequelize = require('../config/connection');
const { Owner, Menu, Product } = require('../models');

router.get('/add-menus', (req, res) => {
    if (!req.session.isOwner) {
        res.redirect('/');
        return;
    }

    res.render('add-menus', {
        id: req.session.user_id,
        loggedIn: req.session.loggedIn,
        isOwner: req.session.isOwner
    });
});

router.get('/edit-menus', (req, res) => {
    if (!req.session.isOwner) {
        res.redirect('/');
        return;
    }

    console.log('======================');
    Owner.findAll({
        include: [
        {
            model: Menu,
        },
        {
            model: Product
        }
    ]
    })
    .then(ownerData => {
        const ownerDB = ownerData.map(owner => owner.get({ plain: true}));
        
        res.render('edit-menus', {
            ownerDB,
            id: req.session.user_id,
            loggedIn: req.session.loggedIn,
            isOwner: req.session.isOwner
        });
    })
});

module.exports = router;