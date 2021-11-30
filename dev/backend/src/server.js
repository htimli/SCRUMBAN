const express = require('express');
const bodyParser = require('body-parser');

const connectDb = require("./config/db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });

connectDb();


const routes = require("./routes/index");


app.use('/api',routes);


app.listen(process.env.PORT || 5000, () => console.log('Up and running 🚀'));
