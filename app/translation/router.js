var Translation = require('./translation-model')
var log = require('bole')('translation/router')
var router = require('express').Router()

// function createTranslation (req, res) {
//     res.status(201).send()
// }
// router.post('/translations', createTranslation)

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
