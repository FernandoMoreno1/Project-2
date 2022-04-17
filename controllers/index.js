const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const menuRoutes = require('./menu-routes.js');
const restaurantsRoutes = require('./restaurants-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/restaurants', restaurantsRoutes);
router.use('/menu', menuRoutes);

module.exports = router;
