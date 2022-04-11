const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds')
const seedOwners = require('./owner-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  console.log('--------------');
  await seedUsers();

  console.log('--------------');
  await seedOwners();

  process.exit(0);
};

seedAll();
