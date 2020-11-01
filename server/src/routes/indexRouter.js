const express = require('express');
const indexRouter = express.Router();
const indexController = require('../controllers/index')

indexRouter.get('/', indexController.home);

module.exports = indexRouter;
