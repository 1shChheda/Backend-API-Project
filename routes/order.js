const express = require('express');

const router = express.Router();

const orderController = require('../controllers/order');

router.get('/', orderController.getAllOrders);

router.get('/:orderId', orderController.getOrderById);

router.post('/', orderController.postAddOrder);

router.post('/:orderId/products/:productId', orderController.addProductToOrder);

module.exports = router;