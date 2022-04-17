const router = require('express').Router();
const sequelize = require('../config/connection');
const {} = require('../models');

router.get('/add-menus', (req, res) => {
    if (!req.session.isOwner) {
        res.redirect('/');
        return;
    }

    res.render('add-menus', {
        id: req.session.user_id,
        loggedIn: req.session.loggedIn,
        isOwner: req.session.isOwner
    });
});

module.exports = router;