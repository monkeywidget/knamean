var express = require('express')
var bodyParser = require('body-parser');

var app = express()
app.use(bodyParser.urlencoded({ extended: true })) // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse requests of content-type - application/json

app.set('views', __dirname)
app.set('view engine', 'pug')

// Load the routes ("controllers" -ish)
// app.use(require('app/site/router'))
app.use('/codebook/api', require('app/word/router'))
app.use('/codebook/api', require('app/translation/router'))

app.use('/canon/api', require('app/paragraph/router'))

// FINALLY, use any error handlers
app.use(require('app/errors/not-found'))

// Export the app instance for unit testing via supertest
module.exports = app