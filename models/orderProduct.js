const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const OrderProduct = sequelize.define('orderProduct', {
    quantity : {
        type : Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
}, {
    tableName : 'orderProducts'
});

module.exports = OrderProduct;