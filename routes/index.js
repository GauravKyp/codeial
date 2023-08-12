const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/home_controller');
const { route } = require('./users');
// console.log(" Test routes loaded")


router.get('/',HomeController.home);
router.use('/users',require('./users'));
router.use('/users',require('./usersproducts'));



// for any futher routes ,access from here 
// router.use('/routerName',require('./routerfile));

module.exports = router;