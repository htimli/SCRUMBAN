const express = require('express');


const connectDb = require("./config/db");

const app = express();

connectDb();


const routes = require("./routes/index");


app.use('/api',routes);


app.listen(process.env.PORT || 5000, () => console.log('Up and running 🚀'));
