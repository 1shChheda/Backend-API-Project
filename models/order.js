const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Order = sequelize.define('order', {
    customerId : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    shippingAddress : {
        type : Sequelize.STRING,
        allowNull : false
    },
    totalPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
      }
}, {
    tableName: 'orders'
});

module.exports = Order;