let mongoose = require('mongoose');
// let mongoosastic = require('mongoosastic');

const Schema = mongoose.Schema;
const WordSchema = new Schema({
    word: String,
    translation: String
});

// could add more methods here

let Word = mongoose.model('Word', WordSchema);
// Word.plugin(mongoosastic);

module.exports = Word;
