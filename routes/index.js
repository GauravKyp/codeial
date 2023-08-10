const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/home_controller');
// console.log(" Test routes loaded")


router.get('/',HomeController.home);
router.use('/users',require('./users'));

// for any futher routes ,access from here 
// router.use('/routerName',require('./routerfile));

module.exports = router;