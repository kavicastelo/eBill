const express = require('express');
const productController = require('../controller/productController');

const router = express.Router();

router.post('/save', productController.saveProduct);
router.put('/update', productController.updateProduct);
router.delete('/delete', productController.deleteProduct);
router.get('/list', productController.getAllProducts);
router.get('/id-list', productController.getAllProductIds);
router.get('/get', productController.getProduct);
router.put('/update-qty', productController.updateQuantity);
module.exports = router;