let Translation = require('./translation-model')
let log = require('bole')('translation/router')
let router = require('express').Router()

function createTranslation (req, res, next) {
    if(!req.body) {
        res.status(400).send({message: "No body in request!"});
        return;
    } else if ( !req.body.translation) {
        res.status(400).send({message: "Translation can not be empty"});
        return;
    }

    let translation = new Translation({translation: req.body.translation || "no translation here"});

    translation.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Translation."});
        } else {
            res.send(data);
        }
    });
}

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

// TODO: search for translation "foo"
// TODO: search for translation matching "*foo*"
//  db.translations.aggregate( [ { $match : { translation : /foo/ } } ] );

function searchTranslationsLike (req, res) {
    Translation.findOne({translation: new RegExp(req.params.translationSearch, 'i') }, function (error, translation) {
        if (error) {
            log.error(error, 'error finding translations')
            res.status(500).send(error)
            return
        }
        res.json(translations)
    })
}

// TODO: search for words matching translation "foo"
//  db.words.aggregate( [ { $match : { translation : /foo/ } } ] );
// TODO: 2 codebook file import/export
// TODO: 3 canon models
// TODO: 4 canon file import
// TODO: 5 translation file export

module.exports = router;
