const express = require('express');

const router = express.Router();

const productController = require('../controllers/product');

router.get('/', productController.getAllProducts);

router.get('/:productId', productController.getProductByID);

router.post('/', productController.postAddProduct);

router.put('/:productId', productController.updateProduct);

router.delete('/:productId', productController.deleteProduct);

module.exports = router;