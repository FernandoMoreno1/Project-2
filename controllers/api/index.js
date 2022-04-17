const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const ownerRoutes = require('./owner-routes.js');

router.use('/users', userRoutes);
router.use('/owners', ownerRoutes);

module.exports = router;
