var Translation = require('./translation-model')
var log = require('bole')('translation/router')
var router = require('express').Router()

// TODO: this is not creating the fields properly
function createTranslation (req, res, next) {
    Translation.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
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

module.exports = router
