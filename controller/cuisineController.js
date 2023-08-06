const Cuisine = require('../models/cuisinesSchema');

const saveCuisine = async (req, res) => {
    try {
      const cuisine = new Cuisine(req.body);
      let newCuisine = await cuisine.save();
      res
        .status(200)
        .send({
          success: true,
          msg: `cuisine inserted!`,
          data: newCuisine,
        });
    } catch (error) {
      res.status(500).send({ success: false, msg: error.message });
    }
};

const getCuisines = async (req, res) => {
    try {
      let cuisines = await Cuisine.find();
      if (cuisines.length > 0) {
        res.status(200).send(cuisines);
      } else {
        res.status(500).send({ success: false, msg: error.message });
      }
    } catch (error) {
      res.status(500).send({ success: false, msg: error.message });
    }
  };


  const updateDataCuisine = async (req, res) => {
    try {
      let cuisine = await Cuisine.findOne({ _id: req.params.id });
      if (cuisine) {
        res.status(201).send(cuisine);
      } else {
        res.status(500).send({ success: false, msg: error.message });
      }
    } catch (error) {
      res.status(500).send({ success: false, msg: error.message });
    }
  };


  const updateCuisine = async (req, res) => {
    try{
        let cuisine = await Cuisine.updateOne(
            { _id: req.params.id },
            { $set:req.body }
        );
        res.status(200).send({success: true, msg: `cuisine updated!`, data: cuisine });
    }
    catch(error) {
        res.status(500).send({ success: false, msg: error.message });
      }
  };

  const deleteCuisine = async (req, res) => {
    try {
      let cuisine = await Cuisine.deleteOne( { _id: req.params.id });
      res.status(200).send({success: true, msg: `cuisine deleted!`, data: cuisine });
    } catch (error) {
      res.status(500).send({ success: false, msg: error.message });
    }
  }




module.exports = {
    saveCuisine,
    getCuisines,
    updateDataCuisine,
    updateCuisine,
    deleteCuisine
}