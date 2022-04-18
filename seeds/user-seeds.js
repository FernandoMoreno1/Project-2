const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        first_name: 'John',
        last_name: 'Costello',
        username: 'jciii91',
        password: 'fakepassword1',
        email: 'lorem@ipsum.abc',
        phone_number: '1234567890',
        address: '123 NotA Street'
    },
    {
        first_name: 'Fernando',
        last_name: 'Moreno',
        username: 'fern_more',
        password: 'fakepassword2',
        email: 'lorem@ipsum.efg',
        phone_number: '2345678901',
        address: '456 NotA Street'
    },
    {
        first_name: 'Hae',
        last_name: 'Kim',
        username: 'hae_kim',
        password: 'fakepassword3',
        email: 'lorem@ipsum.hij',
        phone_number: '3456789012',
        address: '789 NotA Street'
    },
    {
        first_name: 'Hilary',
        last_name: 'Vasconez',
        username: 'hila_vasc',
        password: 'fakepassword4',
        email: 'lorem@ipsum.klm',
        phone_number: '4567890123',
        address: '000 NotA Street'
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;