const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const menusRoutes = require('./menus-routes.js');
const restaurantsRoutes = require('./restaurants-routes.js');
const productsRoutes = require('./products-routes.js');

router.use('/', homeRoutes);
router.use('/menus', menusRoutes);
router.use('/restaurants', restaurantsRoutes);
router.use('/products', productsRoutes);
router.use('/api', apiRoutes);

module.exports = router;