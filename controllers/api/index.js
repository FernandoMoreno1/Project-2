const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/Users', userRoutes);

module.exports = router;
