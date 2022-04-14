const router = require('express').Router();
const { Restaurant, Image } = require('../../models');

//Get all restaurnts
router.get('/', (req, res) => {
    Restaurant.findAll({
        include:[
            {
                model: Image,
                attributes: ['route']
            }
        ]
    })
      .then(restaurantDb => res.json(restaurantDb))
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

//Get all restaurants by category


//Get one restaurant 
router.get('/:id', (req, res) => {
    var ID = req.params.id;
    Restaurant.findOne({
        where:{
            id: ID
        },
        include:[
            {
                model: Image,
                attributes: ['route']
            }
        ]
    })
      .then(restaurantDb =>{
        if (!restaurantDb) {
            res.status(404).json({ message: 'No Restaurant found with this id' });
            return;
          }
          res.json(restaurantDb)
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});


