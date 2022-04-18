const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  console.log('--------------');
  await seedUsers();

  process.exit(0);
};

seedAll();
