const router = require('express').Router();
const { Product, Restaurant, Image } = require('../../models');

//Get all 
router.get('/', (req, res) => {
    Product.findAll({
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
      .then(productDb => res.json(productDb))
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

//Get products by restaurant 
router.get('/restaurant/:id', (req, res) => {
  Product.findAll({
    where:{
      restaurant_id: req.params.id
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

//new 
router.post('/', (req,res) => {
    var data = req.body;
    console.log(data);
    Product.create({
        name: data.name,
        price: data.price,
        description: data.description,
        restaurant_id: data.restaurant_id,
        image_id: data.image_id
    })
      .then(productDb => res.json(productDb))
      .catch(error => {
          res.status(500).json(error);
      });
});

//update 
router.put('/:id', (req,res) => {
    var data = req.body;
    console.log(data);
    Product.update(
        {
            name: data.name,
            price: data.price,
            description: data.description,
            restaurant_id: data.restaurant_id,
            image_id: data.image_id,
            sold: data.sold,
            isActive: data.isActive
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
      .then(productDb => res.json(productDb))
      .catch(error => {
          res.status(500).json(error);
      });
});

//delete 
router.delete('/:id', (req, res) => {
    Product.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(productDb => {
        if (!productDb) {
          res.status(404).json({ message: 'No product found with this id!' });
          return;
        }
        res.json(productDb);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  });



module.exports = router;