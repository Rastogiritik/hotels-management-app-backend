const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const port = 5003; 
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// DB connection
const connectDb = require('./database/connection');
connectDb();


// Use Routes
const restaurantRoutes = require('./routes/restaurentsRoutes');
app.use('/', restaurantRoutes);

const cuisineRoutes = require('./routes/cuisineRoutes')
app.use('/', cuisineRoutes);

const adminroutes = require('./routes/adminRoutes')
app.use('/', adminroutes);


// server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});