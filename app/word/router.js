var Word = require('./word-model')
var log = require('bole')('word/router')
var router = require('express').Router()

function createWord (req, res, next) {
    if(!req.body) {
        res.status(400).send({message: "No body in request!"});
        return;
    } else if ( !req.body.word || !req.body.translation) {
        res.status(400).send({message: "Word needs a word and translation"});
        return;
    }

    var word = new Word({word: req.body.word, translation: req.body.translation});

    word.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Word."});
        } else {
            res.send(data);
        }
    });
};

router.post('/words', createWord)

function getWords (req, res) {
    Word.find(function (error, words) {
        if (error) {
            log.error(error, 'error finding words')
            res.status(500).send(error)
            return
        }
        res.json(words)
    })
}

router.get('/words', getWords)

function getWord(req, res) {
    Word.findById(req.params.wordId, function(err, word) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Word not found with id " + req.params.wordId});
            }
            return res.status(500).send({message: "Error retrieving word with id " + req.params.wordId});
        }

        if(!word) {
            return res.status(404).send({message: "Word not found with id " + req.params.wordId});
        }

        res.send(word);
    });
};

router.get('/words/:wordId', getWord)

module.exports = router
