const router = require('express').Router();

const imageRoutes = require('./image-routes');
const productRoutes = require('./poduct-routes');
const restaurantRoutes = require('./restaurant-routes');

router.use('/images', imageRoutes);
router.use('/products', productRoutes);
router.use('/restaurants', restaurantRoutes);


module.exports = router;
