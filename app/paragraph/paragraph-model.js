let mongoose = require('mongoose');
let mongoosastic = require('mongoosastic');

const Schema = mongoose.Schema;
const ParagraphSchema = new Schema({
    paragraph: String,
    translation: String
});

ParagraphSchema.plugin(mongoosastic, {
    index: 'canon',
    type: 'paragraph',
    host: 'localhost', // TBI read in property
    auth: 'elastic:secret', // TBI read in property
    bulk: {
        size: 10, // preferred number of docs to bulk index
        delay: 100 //milliseconds to wait for enough docs to meet size constraint
    }
});

// could add more methods here

let Paragraph = mongoose.model('Paragraph', ParagraphSchema);

module.exports = Paragraph;
