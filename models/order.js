const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Order = sequelize.define('order', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    customerId : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    shippingAddress : {
        type : Sequelize.STRING,
        allowNull : false
    },
    totalPrice : {
        type : Sequelize.DOUBLE,
        allowNull : false
    }
}, {
    tableName: 'orders'
});

module.exports = Order;