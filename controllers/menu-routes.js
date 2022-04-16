const router = require('express').Router();
const sequelize = require('../config/connection');
const { Menu, MenuProduct, Product } = require('../models');

// get menu
router.get('/:id', (req, res) => {
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
            items
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;