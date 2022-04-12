const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds')
const seedOwners = require('./owner-seeds');
const seedRestaurants = require('./restaurant-seeds');
const seedMenus = require('./menu-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  console.log('--------------');
  await seedUsers();

  console.log('--------------');
  await seedOwners();

  console.log('--------------');
  await seedRestaurants();

  console.log('--------------');
  await seedMenus();

  process.exit(0);
};

seedAll();
