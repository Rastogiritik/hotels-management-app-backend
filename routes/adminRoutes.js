const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController')


router.route('/user/new').post( adminController.saveAdmin );

router.route(`/users`).get( adminController.getusers );

router.route(`/delete/user/:id`).delete( adminController.deleteUser );

router.route(`/update/user/:id`).get( adminController.updateUserData );

router.route(`/update/user/:id`).put( adminController.updateUser );


module.exports = router;