const express = require('express');
const customerRouter = express.Router();
const customerController = require('../controllers/customer')

customerRouter.post('/', customerController.createCustomer);
customerRouter.get('/', customerController.getCustomer);

module.exports = customerRouter;
