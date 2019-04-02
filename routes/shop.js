const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();


router.get('/', productsController.getProducts);

//__dirname -> global varibale holding absolute path(Routes folder)

module.exports = router;