const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const ownerRoutes = require('./owner-routes.js');
const restaurantRoutes = require('./restaurant-routes.js');

router.use('/users', userRoutes);
router.use('/owners', ownerRoutes);
router.use('/restaurants', restaurantRoutes);

module.exports = router;
