const Admin = require('../models/adminSchema')

const saveAdmin = async (req, res) => {
    try {
      // req.body.cuisines = req.cuisines._id
      const admin = new Admin(req.body);
      let newAdmin = await admin.save();
      if (newAdmin) {
        const role = newAdmin.role
        res
        .status(201)
        .send({
          success: true,
          msg: `${role} inserted!`,
          data: newAdmin,
        });
      }
      else{
        res.status(500).send({ success: false, msg: error.message });
      }
    } catch (error) {
      res.status(500).send({ success: false, msg: error.message });
    }
};


const getusers = async (req, res) => {
    try {
      let users = await Admin.find();
      console.log("user",users[0].role);
      if (users.length > 0) {
        res.status(200).send(users);
      } else {
        res.status(500).send({ success: false, msg: error.message });
      }
    } catch (error) {
      res.status(500).send({ success: false, msg: error.message });
    }
};


const deleteUser = async (req, res) => {
     try {
        let user = await Admin.deleteOne( { _id: req.params.id });
        res.status(200).send({success: true, msg: `User deleted!`, data: user });
    } catch (error) {
        res.status(500).send({ success: false, msg: error.message });
    }    
}

const updateUserData = async (req, res) => {
    try {
      let user = await Admin.findOne({ _id: req.params.id });
      if (user) {
        res.status(201).send(user);
      } else {
        res.status(500).send({ success: false, msg: error.message });
      }
    } catch (error) {
      res.status(500).send({ success: false, msg: error.message });
    }
  };
  
  
  const updateUser = async (req, res) => {
    try {
      let user = await Admin.updateOne(
        { _id: req.params.id },
        { $set:req.body }
      );
      res.status(200).send({success: true, msg: `user updated!`, data: user });
    } catch (error) {
      res.status(500).send({ success: false, msg: error.message });
    }
  }




module.exports ={
    saveAdmin,
    getusers,
    deleteUser,
    updateUserData,
    updateUser
}