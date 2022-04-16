const router = require('express').Router();
const { User, Menu } = require('../../models');

// get all users
router.get('/', (req, res) => {
    Menu.findAll({
        attributes: { restaurants }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get()

module.exports = router;