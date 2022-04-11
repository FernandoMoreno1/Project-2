const sequelize = require('../config/connection');
const { Owner } = require('../models')

const ownerdata = [
    {
        first_name: 'Owner',
        last_name: 'One',
        username: 'owner1',
        password: 'password1',
        email: 'owner@one.email',
        phone_number: '1111111111',
        address: '123 NotA Street'
    },
    {
        first_name: 'Owner',
        last_name: 'Two',
        username: 'owner2',
        password: 'password2',
        email: 'owner@two.email',
        phone_number: '2222222222',
        address: '456 NotA Street'
    },
    {
        first_name: 'Owner',
        last_name: 'Three',
        username: 'owner3',
        password: 'password3',
        email: 'owner@three.email',
        phone_number: '3333333333',
        address: '789 NotA Street'
    },
    {
        first_name: 'Owner',
        last_name: 'Four',
        username: 'owner4',
        password: 'password4',
        email: 'owner@four.email',
        phone_number: '4444444444',
        address: '000 NotA Street'
    },
];

const seedOwners = () => Owner.bulkCreate(ownerdata, {individualHooks: true});

module.exports = seedOwners;