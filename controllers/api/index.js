const router = require('express').Router();

<<<<<<< HEAD
const imageRoutes = require('./image-routes');
const productRoutes = require('./poduct-routes');
const restaurantRoutes = require('./restaurant-routes');
const categoryRoutes = require('./category-routes');
const orderRoutes = require('./order-routes');

router.use('/images', imageRoutes);
router.use('/products', productRoutes);
router.use('/restaurants', restaurantRoutes);
router.use('/categories', categoryRoutes);
router.use('/orders', orderRoutes);
=======
const userRoutes = require('./user-routes.js');
const ownerRoutes = require('./owner-routes.js');
const restaurantRoutes = require('./restaurant-routes.js');
>>>>>>> origin/feature/add-restaurants

router.use('/users', userRoutes);
router.use('/owners', ownerRoutes);
router.use('/restaurants', restaurantRoutes);

module.exports = router;
