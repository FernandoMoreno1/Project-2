const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product } = require('../models');

// get products
router.get('/', (req, res) => {
    console.log('======================');
    Product.findAll()
    .then(productData => {
        const products = productData.map(product => product.get({ plain: true}));

        res.render('products', {
            products,
            loggedIn: req.session.loggedIn,
            isOwner: req.session.isOwner
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/add-products', (req, res) => {
    if (!req.session.isOwner) {
        res.redirect('/');
        return;
    }

    res.render('add-products', {
        id: req.session.user_id,
        loggedIn: req.session.loggedIn,
        isOwner: req.session.isOwner
    });
});

module.exports = router;