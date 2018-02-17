var express = require('express')

var app = express()
app.set('views', __dirname)
app.set('view engine', 'pug')

// Load the routes ("controllers" -ish)
// app.use(require('app/site/router'))
app.use('/api', require('app/translation/router'))
// word
// document
// chapter
// paragraph

// FINALLY, use any error handlers
app.use(require('app/errors/not-found'))

// Export the app instance for unit testing via supertest
module.exports = app