const router = require('express').Router();
const { Image } = require('../../models');

//Get image
router.get('/:id', (req, res) => {
    var ID = req.params.id;
    Image.findOne({
        where:{
            id: ID
        }
    })
      .then(imageDb =>{
        if (!imageDb) {
            res.status(404).json({ message: 'No Image found with this id' });
            return;
          }
          res.json(imageDb)
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

//new image
router.post('/', (req, res) => {
    Image.create({
      route: req.body.route,
    })
      .then(imageDb => res.json(imageDb))
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  });

//update image
router.put('/:id', (req, res) =>{
    Image.update(
        {
            route: req.body.route
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
     .then(imageDb =>{
        if (!imageDb) {
            res.status(404).json({ message: 'No Image found with this id' });
            return;
          }
          res.json(imageDb)
     })
     .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});






