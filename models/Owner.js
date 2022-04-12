const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// Owner model
class Owner extends Model {
    // set up method to run on instance data (per Owner) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Owner.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        restaurant_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'restaurant',
                key: 'id'
            }
        }
    },
    {
        hooks: {
        // set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newOwnerData) {
            newOwnerData.password = await bcrypt.hash(newOwnerData.password, 10);
            return newOwnerData;
        },

        async beforeUpdate(updatedOwnerData) {
            updatedOwnerData.password = await bcrypt.hash(updatedOwnerData.password, 10);
            return updatedOwnerData;
        }
        },
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'owner'
    }
)

module.exports = Owner;