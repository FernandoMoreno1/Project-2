const router = require('express').Router();
const { Product, Image, Restaurant } = require('../models');

// get menu
router.get('/:id', (req, res) => {
    console.log('Lookin for menu...');
    const id = req.params.id;
    Product.findAll({
        where: {
            restaurant_id: id
        },
        attributes: [
            'id',
            'name',
            'price',
            'description',
            'isActive'
        ],
        include:[
            {
                model: Restaurant,
                attributes: ['id','name']
            },
            {
                model: Image,
                attributes: ['id','route']
            }
        ]
    })
    .then(menuData => {
        const items = menuData.map(menuD => menuD.get({ plain: true}));

        res.render('menu', {
            items,
            loggedIn: req.session.loggedIn,
            res_id: id
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', (req, res) => {
    var ID = req.params.id
    //console.log(ID);
    Product.findByPk(ID, {
        attributes: [
            'id',
            'name',
            'price',
            'description',
            'isActive',
            'restaurant_id'
        ]
    })
      .then(productDb => {
        if (productDb) {
            
          const product = productDb.get({ plain: true });
          console.log(product);
          res.render('edit-product', {
            product,
            loggedIn: req.session.loggedIn
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  

module.exports = router;