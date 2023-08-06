const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  images: [
    {
      type: String,
      required: true
    },
  ],

  title: {
    type: String,
    required: true
  },

  subtitle: {
    type: String,
    required: true
  },

  food_availability: {
    type: Boolean,
    required: true
  },

  cuisines: [
    {
        // type: mongoose.Schema.ObjectId,
        // ref: 'Cuisine',
        type: String,
    },
  ],
  createdAt:{
    type: Date,
    default: Date.now
},
});

module.exports = mongoose.model('restaurant', restaurantSchema);