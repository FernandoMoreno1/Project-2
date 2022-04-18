const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     });
const sequelize = new Sequelize(
  'heroku_1983162ad204302', 
  'b873199b9fd5fb', 
  '5661634c', {
      host: 'us-cdbr-east-05.cleardb.net',
      dialect: 'mysql'
    }
);

mysql://b873199b9fd5fb:5661634c@us-cdbr-east-05.cleardb.net/heroku_1983162ad204302?reconnect=true

module.exports = sequelize;
