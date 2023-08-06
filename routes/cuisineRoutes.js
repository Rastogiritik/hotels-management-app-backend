const express = require('express');
const router = express.Router();
const cuisineController = require('../controller/cuisineController')


router.route('/cuisine/new').post( cuisineController.saveCuisine );

router.route('/cuisines').get( cuisineController.getCuisines );

router.route('/update/cuisines/:id').get( cuisineController.updateDataCuisine );

router.route('/update/cuisines/:id').put( cuisineController.updateCuisine );

router.route('/delete/cuisines/:id').delete( cuisineController.deleteCuisine );


module.exports = router;