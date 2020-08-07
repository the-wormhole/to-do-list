const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');


console.log('router loaded');

router.get('/',homeController.home);

router.post('/create-task', homeController.create_t);

module.exports = router;