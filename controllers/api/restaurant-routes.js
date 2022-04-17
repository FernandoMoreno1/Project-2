const router = require('express').Router();
const { Restaurant } = require('../../models');

// get all restaurants
router.get('/', (req, res) => {
    Restaurant.findAll()
    .then(dbRestaurantData => res.json(dbRestaurantData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Restaurant.create({
        name: req.body.name,
        address: req.body.address, 
        phone_number: req.body.phone_number,
        open_at: req.body.open_at,
        close_at: req.body.close_at,
        owner_id: req.body.owner_id
    })
    .then(dbRestaurantData => {        
            res.json(dbRestaurantData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Restaurant.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbRestaurantData => {
        if (!dbRestaurantData) {
            res.status(404).json({ message: 'No restaurant found with this id' });
            return;
        }
        res.json(dbRestaurantData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req,res) => {
    Restaurant.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbRestaurantData => {
        if(!dbRestaurantData) {
            res.status(404).json({message: 'No restaurant found with this id'});
            return;
        }
        res.json(dbRestaurantData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;