var csvFileName = process.argv[2]

console.log('I\'ll load in the file named "' + csvFileName + '"')

var fs = require('fs');
var path = require('path');

var BUFFER = bufferFile(csvFileName);

function bufferFile(relPath) {
    return fs.readFileSync(path.join(__dirname, relPath)); // zzzz....
}

// connect to mongo
