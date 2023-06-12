const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Product = sequelize.define('product', {
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true,
        unique : true,
        autoIncrement : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    price : {
        type : Sequelize.DOUBLE,
        allowNull : false
    },
    description : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    imageUrl : {
        type : Sequelize.STRING,
        allowNull : false
    }
}, {
    tableName: 'products'
});

module.exports = Product;