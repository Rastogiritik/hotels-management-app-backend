const express = require('express');
const router = express.Router();
const restaurantController = require('../controller/restaurantController')


router.route('/restaurant/new',).post( restaurantController.saveRestaurant );

router.route('/restaurants',).get( restaurantController.getRestaurants );

router.route('/update/restaurant/:id',).get( restaurantController.updateDataRestaurants );

router.route('/update/restaurant/:id',).put( restaurantController.updateRestaurant );

router.route('/delete/restaurant/:id',).delete( restaurantController.deleteRestaurant );

router.route('/search/restaurant/:key',).get( restaurantController.searchRestaurant );


module.exports = router;