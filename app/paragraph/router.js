let Paragraph = require('./paragraph-model')
// let log = require('bole')('paragraph/router')
let router = require('express').Router()

// curl -H "Content-Type: application/json" -X POST -d '{"paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis odio at ultricies commodo. Maecenas id consequat arcu, ut mattis sem. Aliquam erat volutpat. Sed bibendum, quam vel consequat vehicula, tellus lectus pellentesque risus, et dictum nibh nisl in lacus. Donec sed est et ex tempus venenatis. Vivamus augue ex, faucibus id molestie sed, gravida eu sapien. Curabitur lobortis leo ut nisl maximus suscipit. Sed viverra hendrerit enim."}' http://localhost:3000/canon/api/paragraphs
function createParagraph (req, res, next) {
    if(!req.body) {
        res.status(400).send({message: "No body in request!"});
        return;
    } else if (!req.body.paragraph) {
        res.status(400).send({message: "Paragraph needs text under 'paragraph'"});
        return;
    }

    let paragraph = new Paragraph({paragraph: req.body.paragraph});

    paragraph.save(function(err, data) {
        paragraph.on('es-indexed', function () {
            console.log('document indexed'); // TODO: ??
        });

        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Word."});
        } else {
            res.send(data);
        }
    });
}

router.post('/paragraphs', createParagraph);;

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
