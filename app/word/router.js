var Word = require('./word-model')
var log = require('bole')('word/router')
var router = require('express').Router()

// curl -H "Content-Type: application/json" -X POST
//      -d '{"translation":"ungood","word":"bad"}' http://localhost:3000/codebook/api/words
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

// curl -H "Content-Type: application/json" -X GET http://localhost:3000/codebook/api/words
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

// curl -H "Content-Type: application/json" -X GET http://localhost:3000/codebook/api/words/5a9b30bbe38d4ba70378383d
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

// curl -H "Content-Type: application/json" -X GET http://localhost:3000/codebook/api/search/word/bad
function searchWord(req, res) {
    Word.findOne({'word': req.params.wordText}, "word translation", function(err, word) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Word not found: " + req.params.wordText});
            }
            return res.status(500).send({message: "Error retrieving word: " + req.params.wordText});
        }

        if(!word) {
            return res.status(404).send({message: "Word not found: " + req.params.wordText});
        }

        res.send(word);
    });
};

router.get('/search/word/:wordText', searchWord)

module.exports = router
