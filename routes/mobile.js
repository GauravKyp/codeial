const express = require('express');
const router = express.Router();

const mobilescontroller = require('../controllers/mobile_controller');
// console.log(" Test routes loaded")


router.get('/mobile', mobilescontroller.mobiles);



module.exports = router;