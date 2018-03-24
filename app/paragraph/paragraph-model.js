let mongoose = require('mongoose');
let mongoosastic = require('mongoosastic');

const Schema = mongoose.Schema;
const ParagraphSchema = new Schema({
    paragraph: String,
    translation: String
});

// could add more methods here

let Paragraph = mongoose.model('Paragraph', ParagraphSchema);
Paragraph.plugin(mongoosastic);

module.exports = Paragraph;
