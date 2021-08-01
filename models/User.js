const { Model, DatatTypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Creates Our User Model
class User extends Model {}


//Define Table Columns and Configuration
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
            username: {
                type: DataTypes.STRING,
                allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        }
    },
    {
    sequelize, //pass in imported sequelize connection (direct connection to DB)
    timestamps: false, //don't automatically create CreatedAt/updatedAt timestamp fields
    freezeTableName: true, //don't pluralize name of database table
    underscored: true, //use underscores instead of camel-casin (i.e `comment_text` and not `commentText`)
    modelName: 'user' //make it so our name stays lowercase in the DB
    }
);

module.exports = User;