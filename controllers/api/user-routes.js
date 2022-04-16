const router = require('express').Router();
const sequelize = require('../config/connection');

const { User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// Pull a user
router.put('/:id', (req, res) => {
    User.FindOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'first_name', 'last_name', 'address', 'phone_number', 'email']
            }
        ]
    })
    .then(dbUserData => {
        console.log(dbUserData);
    });
});

module.exports = router;