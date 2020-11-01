const express = require('express');
const paymentRouter = express.Router();
const paymentController = require('../controllers/payments')

paymentRouter.post('/', paymentController.handlePayment);

module.exports = paymentRouter;
