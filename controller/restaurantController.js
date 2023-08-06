const Restaurant = require("../models/restaurantSchema");

const saveRestaurant = async (req, res) => {
  try {
    // req.body.cuisines = req.cuisines._id
    const restaurant = new Restaurant(req.body);
    let newRestaurant = await restaurant.save();
    res
      .status(200)
      .send({
        success: true,
        msg: `restaurant inserted!`,
        data: newRestaurant,
      });
  } catch (error) {
    res.status(500).send({ success: false, msg: error.message });
  }
};


const getRestaurants = async (req, res) => {
  try {
    let restaurants = await Restaurant.find();
    if (restaurants.length > 0) {
      res.status(200).send(restaurants);
    } else {
      res.status(500).send({ success: false, msg: error.message });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error.message });
  }
};


const updateDataRestaurants = async (req, res) => {
  try {
    let restaurant = await Restaurant.findOne({ _id: req.params.id });
    if (restaurant) {
      res.status(201).send(restaurant);
    } else {
      res.status(500).send({ success: false, msg: error.message });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error.message });
  }
};


const updateRestaurant = async (req, res) => {
  try {
    let restaurant = await Restaurant.updateOne(
      { _id: req.params.id },
      { $set:req.body }
    );
    res.status(200).send({success: true, msg: `restaurant updated!`, data: restaurant });
  } catch (error) {
    res.status(500).send({ success: false, msg: error.message });
  }
}


const deleteRestaurant = async (req, res) => {
  try {
    let restaurant = await Restaurant.deleteOne( { _id: req.params.id });
    res.status(200).send({success: true, msg: `restaurant deleted!`, data: restaurant });
  } catch (error) {
    res.status(500).send({ success: false, msg: error.message });
  }
}


const searchRestaurant = async(req, res) => {
    try {
      let restaurant = await Restaurant.find(
        {
          "$or":[
            { "name": {$regex:req.params.key} },
            { "address": {$regex:req.params.key} },
            { "title": {$regex:req.params.key} },
            { "subtitle": {$regex:req.params.key} },
            { "cuisines": {$regex:req.params.key} }
          ]
        });      
        res.status(200).send({success: true,  data:restaurant });
    } 
    catch (error) {
      res.status(500).send({ success: false, msg: error.message });
    }
  }
  




module.exports = {
  saveRestaurant,
  getRestaurants,
  updateDataRestaurants,
  updateRestaurant,
  deleteRestaurant,
  searchRestaurant
};
