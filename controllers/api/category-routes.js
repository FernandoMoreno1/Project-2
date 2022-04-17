const router = require('express').Router();
const { Category } = require('../../models');

//Get all 
router.get('/', (req, res) => {
    Category.findAll()
      .then(categoryDb => res.json(categoryDb))
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

//Get one
router.get('/:id', (req, res) => {
    var ID = req.params.id;
    Category.findOne({
        where: {
            id: ID
          }
    })
      .then(categoryDb =>{
        if (!categoryDb) {
            res.status(404).json({ message: 'No Category found with this id' });
            return;
          }
          res.json(categoryDb)
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

//new 
router.post('/', (req, res) => {
    Category.create({
      name: req.body.name,
      description: req.body.description
    })
      .then(categoryDb => res.json(categoryDb))
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  });

//update 
router.put('/:id', (req, res) =>{
    Category.update(
        {
            name: req.body.name,
            description: req.body.description,
            is_active: req.body.is_active
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
     .then(categoryDb =>{
        if (!categoryDb) {
            res.status(404).json({ message: 'No Category found with this id' });
            return;
          }
          res.json(categoryDb)
     })
     .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

//delete 
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(categoryDb => {
      if (!categoryDb) {
        res.status(404).json({ message: 'No Category found with this id!' });
        return;
      }
      res.json(categoryDb);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});


module.exports = router;
