//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// Setting Base directory
app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

require('./app/routes/routes')(app);

 //Server port listner
app.listen(3005);
console.log("Jammin\' on port 3005...");

