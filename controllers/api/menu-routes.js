const router = require('express').Router();
const { Menu, Restaurant } = require('../../models');

// get all menus
router.get('/', (req, res) => {
    Menu.findAll()
    .then(dbMenuData => res.json(dbMenuData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// post new menu
router.post('/', (req, res) => {
    Restaurant.findOne({
        where: {
            name: req.body.name
        },
        attributes: [
            'id'
        ]
    })
    .then(restaurantId => {
        Menu.create({
            restaurant_id: restaurantId.id,
            owner_id: req.body.owner_id
        })
    })
    .then(dbMenuData => {        
            res.json(dbMenuData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req,res) => {
    Menu.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbMenuData => {
        if(!dbMenuData) {
            res.status(404).json({message: 'No menu found with this id'});
            return;
        }
        res.json(dbMenuData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;