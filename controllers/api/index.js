const router = require('express').Router();

const imageRoutes = require('./image-routes');
const productRoutes = require('./poduct-routes');
const restaurantRoutes = require('./restaurant-routes');
const categoryRoutes = require('./category-routes');
const orderRoutes = require('./order-routes');
const ownerRoutes = require('./owner-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/images', imageRoutes);
router.use('/products', productRoutes);
router.use('/restaurants', restaurantRoutes);
router.use('/categories', categoryRoutes);
router.use('/orders', orderRoutes);
router.use('/owners', ownerRoutes);
router.use('/users', userRoutes);


module.exports = router;
