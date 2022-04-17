const router = require('express').Router();
const { Product } = require('../../models');

// get all products
router.get('/', (req, res) => {
    Product.findAll()
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// post new product
router.post('/', (req, res) => {
    Product.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        owner_id: req.body.owner_id,
    })
    .then(dbProductData => {        
            res.json(dbProductData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req,res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbProductData => {
        if(!dbProductData) {
            res.status(404).json({message: 'No product found with this id'});
            return;
        }
        res.json(dbProductData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;