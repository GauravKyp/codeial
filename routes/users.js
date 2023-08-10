const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user-controller');
// console.log(" Test routes loaded")


router.get('/profile', usersController.profile);


module.exports = router;