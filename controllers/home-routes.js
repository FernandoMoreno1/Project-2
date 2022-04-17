const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

// get homepage
router.get('/', (req, res) => {
    User.findAll({
    attributes: [
        'id',
        'first_name',
        'last_name',
    ],
    })
    .then(dbUserData => {
        
        const users = dbUserData.map(user => user.get({ plain: true }));

    
        res.render('homepage', { users });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// render login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }    res.render('login');
  });

  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  

module.exports = router;
