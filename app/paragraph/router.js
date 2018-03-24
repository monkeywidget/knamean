var Paragraph = require('./paragraph-model')
var log = require('bole')('paragraph/router')
var router = require('express').Router()

// curl -H "Content-Type: application/json" -X GET http://localhost:3000/canon/api/paragraph/5a9b30bbe38d4ba70378383d
function getParagraph(req, res) {
    Paragraph.findById(req.params.paragraphId, function(err, paragraph) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Paragraph not found with id " + req.params.paragraphId});
            }
            return res.status(500).send({message: "Error retrieving Paragraph with id " + req.params.paragraphId});
        }

        if(!paragraph) {
            return res.status(404).send({message: "Paragraph not found with id " + req.params.paragraphId});
        }

        res.send(paragraph);
    });
};

router.get('/paragraphs/:paragraphId', getParagraph);

module.exports = router;
