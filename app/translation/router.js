var Translation = require('./translation-model')
var log = require('bole')('translation/router')
var router = require('express').Router()

function createTranslation (req, res, next) {
    // Create and Save a new Note
    if(!req.body) {
        res.status(400).send({message: "No body in request!"});
        return;
    } else if ( !req.body.translation) {
        res.status(400).send({message: "Translation can not be empty"});
        return;
    }

    var translation = new Translation({translation: req.body.translation || "no translation here"});

    translation.save(function(err, data) {
        console.log("data is " + data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Translation."});
        } else {
            res.send(data);
        }
    });
};

router.post('/translations', createTranslation)

function getTranslations (req, res) {
    Translation.find(function (error, translations) {
        if (error) {
            log.error(error, 'error finding translations')
            res.status(500).send(error)
            return
        }
        res.json(translations)
    })
}

router.get('/translations', getTranslations)

module.exports = router
