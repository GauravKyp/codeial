const express = require('express');
const router = express.Router();

const productscontroller = require('../controllers/product_controller');
// console.log(" Test routes loaded")


router.get('/products', productscontroller.products);
router.use('/products',require('./mobile'));


module.exports = router;