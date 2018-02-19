var config = module.exports
var PRODUCTION = process.env.NODE_ENV === 'production'

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: '127.0.0.1'
}

config.mongodb = {
  port: process.env.MONGODB_PORT || 27017,
  host: process.env.MONGODB_HOST || 'localhost'
}
if (PRODUCTION) {
  // for example
  config.express.ip = '0.0.0.0'
}

// config.db

// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/knamean');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

// config.email etc
// config.log
