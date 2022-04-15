const router = require('express').Router();
const sequelize = require('../config/connection');
const { User,Owner,Product } = require('../models');

router.get('/',(req,res) =>{
    console.log(req.session);
    res.render("homepage",{
        loggedIn:req.session.loggedIn,
    });
});

router.get('/login',(req,res) =>{
    res.render('login');
});

router.get('/signup',(req,res) => {
    res.render('signup');
});

module.exports = router;