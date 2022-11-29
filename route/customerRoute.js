const express = require('express');
const customerController = require('../controller/customerController');

const router = express.Router();

router.post('/save', customerController.saveCustomer);
router.put('/update', customerController.updateCustomer);
router.delete('/delete', customerController.deleteCustomer);
router.get('/get', customerController.getCustomer);
router.get('/list', customerController.getAllCustomers);
router.get('/id-list', customerController.getAllCustomerIds);
module.exports = router;