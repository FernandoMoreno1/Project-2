const router = require('express').Router();
const sequelize = require('../config/connection');
const { Owner, Restaurant, Menu, Product, MenuProduct } = require('../models');

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
            restaurants,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get restaurant menu
router.get('/menu/:id', (req, res) => {
    console.log('======================');
    Menu.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Product,
                through: MenuProduct,
                as: 'product_menu'
            }
        ]
    })
    .then(menuData => {
        if (!menuData) {
            res.status(404).json({ message: 'No menu found with this id' });
            return;
        }
        const items = menuData.get('product_menu', { plain: true});

        res.render('menu', {
            items,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/add-restaurants', (req, res) => {
    if (!req.session.isOwner) {
        res.redirect('/');
        return;
    }

    res.render('add-restaurants', {
        id: req.session.user_id,
        loggedIn: req.session.loggedIn,
        isOwner: req.session.isOwner
    });
});

router.get('/admin', (req,res) => {
    if(!req.session.isOwner) {
        res.redirect('/');
        return;
    }

    console.log('======================');
    Owner.findAll({
        include: [
        {
            model: Restaurant
        },
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
        
        res.render('admin', {
            ownerDB,
            id: req.session.user_id,
            loggedIn: req.session.loggedIn,
            isOwner: req.session.isOwner
        });
    })
})

module.exports = router;