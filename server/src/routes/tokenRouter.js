const express = require('express');
const tokenRouter = express.Router();
const tokenController = require('../controllers/token')

tokenRouter.post('/', tokenController.handleToken);

module.exports = tokenRouter;
