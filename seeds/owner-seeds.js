const sequelize = require('../config/connection');
const { Owner } = require('../models');

const ownerdata = [
    {
        first_name: 'Owner',
        last_name: 'One',
        username: 'owner_one',
        password: 'fakepassword1',
        email: 'lorem@ipsum.abc',
        phone_number: '1234567890',
        address: '123 NotA Street'
    }
];

const seedOwners = () => Owner.bulkCreate(ownerdata, {individualHooks: true});

module.exports = seedOwners;