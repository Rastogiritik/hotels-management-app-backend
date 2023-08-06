const mongoose = require('mongoose');

const connectDb = () => {mongoose.connect('mongodb://127.0.0.1/returant-management-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(con => {
    console.log(`Connected to MongoDB server`);
})
}


module.exports= connectDb