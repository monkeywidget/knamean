var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const WordSchema = new Schema({
    word: String,
    translation: String
});

// could add more methods here

module.exports = mongoose.model('Word', WordSchema);
