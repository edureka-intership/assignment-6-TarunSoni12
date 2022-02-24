const express = require('express');
const restaurantController = require('../Controllers/restaurants');

const router = express.Router();

router.post('/filterRestaurants', restaurantController.filterRestaurants);

module.exports = router;    