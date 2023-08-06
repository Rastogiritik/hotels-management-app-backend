const mongoose = require("mongoose");

const cuisineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  vegNonVeg: {
    type: String,
    required: true,
  },
  pics: [
    {
      type: String,
    },
  ],
  price:{
    type:String,
    required:true
  },
  ratings:{
    type:Number,
    default:0,
  },
  ingredients: {
    type: [String],
  },
});

module.exports = mongoose.model('Cuisine',cuisineSchema);
