let mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TranslationSchema = new Schema({
    translation: String
});

// could add more methods here

module.exports = mongoose.model('Translation', TranslationSchema);
