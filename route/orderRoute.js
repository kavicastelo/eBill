const express = require('express');
const orderController = require('../controller/orderController');

const router = express.Router();

router.post('/save', orderController.saveOrder);
router.get('/id-list', orderController.getAllOrderIds);
router.get('/get', orderController.getOrder);
router.get('/list', orderController.getAllOrders);

module.exports = router;