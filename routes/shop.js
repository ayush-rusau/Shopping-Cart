const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // res.send('<h1>Hello from Express!</h1>');
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.products;
  res.render('shop', {prods: products, docTitle: 'Shop'});
});

//__dirname -> global varibale holding absolute path(Routes folder)

module.exports = router;