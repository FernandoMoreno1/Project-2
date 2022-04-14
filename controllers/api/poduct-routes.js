const router = require('express').Router();
const { Product, Category, Restaurant, Image } = require('../../models');

//Get all 
router.get('/', (req, res) => {
    Product.findAll({
       include:[
            {
                model: Restaurant,
                attributes: ['name']
            },
            {
                model: Image,
                attributes: ['route']
            },
            {
                model: Category,
                attributes: ['name', 'description']
            }
        ] 
    })
      .then(productDb => res.json(productDb))
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

//Get one 
router.get('/:id', (req, res) => {
    var ID = req.params.id;
    Product.findOne({
        where:{
            id: ID
        },
        include:[
            {
                model: Restaurant,
                attributes: ['name']
            },
            {
                model: Image,
                attributes: ['route']
            },
            {
                model: Category,
                attributes: ['name', 'description']
            }
        ]
    })
      .then(productDb =>{
        if (!productDb) {
            res.status(404).json({ message: 'No Product found with this id' });
            return;
          }
          res.json(productDb)
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

