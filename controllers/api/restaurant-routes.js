const router = require('express').Router();
const { Restaurant, Image, Category } = require('../../models');

//Get all restaurnts
router.get('/', (req, res) => {
    Restaurant.findAll(
        {
        attributes: [
            'id',
            'name',
            'address',
            'phone_number',
            'open_at',
            'close_at'
        ],
        include:[
            {
                model: Image,
                attributes: ['id','route']
            },
            {
                model: Category,
                attributes: ['id','name']
            }
        ]
    }
    )
      .then(restaurantDb => res.json(restaurantDb))
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

//Get all restaurants by category
router.get('/category/:id', (req, res) => {
    var ID = req.params.id;
    Restaurant.findAll(
        {
            where:{
                category_id: ID
            },
        attributes: [
            'id',
            'name',
            'address',
            'phone_number',
            'open_at',
            'close_at'
        ],
        include:[
            {
                model: Image,
                attributes: ['id','route']
            },
            {
                model: Category,
                attributes: ['id','name']
            }
        ]
    }
    )
      .then(restaurantDb => res.json(restaurantDb))
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

//Get one restaurant 
router.get('/:id', (req, res) => {
    var ID = req.params.id;
    Restaurant.findOne({
        where:{
            id: ID
        },
        attributes: [
            'id',
            'name',
            'address',
            'phone_number',
            'open_at',
            'close_at'
        ],
        include:[
            {
                model: Image,
                attributes: ['id','route']
            },
            {
                model: Category,
                attributes: ['id','name']
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

//new restaurant
router.post('/', (req,res) => {
    var data = req.body;
    console.log(data);
    Restaurant.create({
        name: data.name,
        address: data.address,
        phone_number: data.phone_number,
        open_at: data.open_at,
        close_at: data.close_at,
        image_id: data.image_id,
        category_id: data.category_id
    })
      .then(restaurantDb => res.json(restaurantDb))
      .catch(error => {
          res.status(500).json(error);
      });
});

//update restaurant
router.put('/:id', (req,res) => {
    var data = req.body;
    //console.log(data);
    Restaurant.update(
        {
            name: data.name,
            address: data.address,
            phone_number: data.phone_number,
            open_at: data.open_at,
            close_at: data.close_at,
            image_id: data.image_id,
            category_id: data.category_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
      .then(restaurantDb => res.json(restaurantDb))
      .catch(error => {
          res.status(500).json(error);
      });
});

//delete
router.delete('/:id', (req, res) => {
    Restaurant.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(restaurantDb => {
        if (!restaurantDb) {
          res.status(404).json({ message: 'No Image found with this id!' });
          return;
        }
        res.json(restaurantDb);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

module.exports = router;

