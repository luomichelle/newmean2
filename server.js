'use strict';

var express     = require("express"),
    app         = express(),
    bodyParser  = require('body-parser'),
    morgan      = require("morgan"),
    mongoose    = require("mongoose"),
    config      = require("./config/config");

var port = process.env.PORT || 8080,
    env = process.env.NODE_ENV || 'development';

if (env == 'development') {
  // All code depending on the environment here
  // You can put morgan here for example
}

// mongoose.connect(config.mongoURL);

app.use( morgan("dev") );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Serving angular dependencies from node_modules folder
app.use("/scripts/zonejs", express.static(__dirname + '/node_modules/zone.js/dist/'));
app.use("/scripts/reflect-metadata", express.static(__dirname + '/node_modules/reflect-metadata/'));
app.use("/scripts/systemjs", express.static(__dirname + '/node_modules/systemjs/dist/'));
app.use("/scripts/angular", express.static(__dirname + '/node_modules/@angular/'));
app.use("/scripts/angular2-in-memory-web-api", express.static(__dirname + '/node_modules/angular2-in-memory-web-api/'));
app.use("/scripts/rxjs", express.static(__dirname + '/node_modules/rxjs/'));
app.use("/scripts/es6-shim", express.static(__dirname + '/node_modules/es6-shim/'));

app.use(express.static(__dirname + '/public'));

require('./app/routes/routes')(app);

app.listen(port);

console.log('Magic happens on port ' + port);
