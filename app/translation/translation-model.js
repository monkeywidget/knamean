var mongoose = require('mongoose');

var translationSchema = mongoose.Schema({
    name: String
});

var Translation = mongoose.model('Translation', translationSchema);
//Export function to create "SomeModel" model class
// module.exports = mongoose.model('SomeModel', SomeModelSchema );

function findAll (callback) {
    // TODO: DB / mongoose query here!
    setImmediate(function () {
        callback(null, [
            {translation: "ungood", root: "good"},
            {translation: "good"}
        ])
    })
}

exports.findAll = findAll
