const router = require('express').Router();
const { Order, User } = require('../../models');


//get All
router.get('/', (req, res) => {
    Order.findAll({
        attributes: [
            'id',
            'total',
            'description',
            'state',
            'finished'
        ],
       include:[
            {
                model: User,
                attributes: ['first_name', 'last_name']
            }
        ] 
    })
      .then(orderDb => res.json(orderDb))
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

//Get Order
router.get('/:id', (req, res) => {
    var ID = req.params.id;
    Order.findOne({
        where:{
            id: ID
        },
        attributes: [
            'id',
            'total',
            'description',
            'state',
            'finished'
        ],
       include:[
            {
                model: User,
                attributes: ['first_name', 'last_name']
            }
        ] 
    })
      .then(orderDB =>{
        if (!orderDB) {
            res.status(404).json({ successful: false, message: 'Something went wrong, the state could not get order' });
            return;
          }
          res.json(orderDB)
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

//Get all orders by user
router.get('/user/:id', (req, res) => {
    var ID = req.params.id;
    Order.findOne({
        where:{
            user_id: ID
        },
        attributes: [
            'id',
            'total',
            'description',
            'state',
            'finished'
        ],
       include:[
            {
                model: User,
                attributes: ['first_name', 'last_name']
            }
        ] 
    })
      .then(orderDB =>{
        if (!orderDB) {
            res.status(404).json({ successful: false, message: 'Something went wrong, the state could not get order' });
            return;
          }
          res.json(orderDB)
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
    Order.create({
        total: data.total,
        description: data.description,
        user_id: data.user_id
    })
      .then(orderDB => res.json(orderDB))
      .catch(error => {
          res.status(500).json(error);
      });
});

//update
router.put('/:id', (req,res) => {
    var data = req.body;
    console.log(data);
    Order.update(
        {
            total: data.total,
            description: data.description,
            user_id: data.user_id,
            finished: data.finished,
            state: data.state
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
      .then(orderDB => res.json(orderDB))
      .catch(error => {
          res.status(500).json(error);
      });
});

//delete 
router.delete('/:id', (req, res) => {
    Order.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(orderDB => {
        if (!orderDB) {
          res.status(404).json({ message: 'No order found with this id!' });
          return;
        }
        res.json(orderDB);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

module.exports = router;
