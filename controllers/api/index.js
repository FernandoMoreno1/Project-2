const router = require('express').Router();

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


module.exports = router;
