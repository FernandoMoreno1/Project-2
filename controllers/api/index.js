const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const ownerRoutes = require('./owner-routes.js');
const restaurantRoutes = require('./restaurant-routes.js');
const menuRoutes = require('./menu-routes.js');
const productRoutes = require('./product-routes.js');

router.use('/users', userRoutes);
router.use('/owners', ownerRoutes);
router.use('/restaurants', restaurantRoutes);
router.use('/menus', menuRoutes);
router.use('/products', productRoutes);

module.exports = router;
