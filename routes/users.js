const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user-controller');
// console.log(" Test routes loaded")


router.get('/profile', usersController.profile);
router.get('/service', usersController.service);

module.exports = router;