var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TranslationSchema = new Schema({
    name: String
});

// could add more methods here

module.exports = mongoose.model('Translation', TranslationSchema);
