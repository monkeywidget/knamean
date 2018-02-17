var translation = require('./translation-model')
var log = require('bole')('translation/router')
var router = require('express').Router()

function getTranslations (req, res) {
    translation.findAll(function (error, translations) {
        if (error) {
            log.error(error, 'error finding translations')
            res.status(500).send(error)
            return
        }
        res.json(translations)
    })
}

// function createTranslation (req, res) {
//     res.status(201).send()
// }
// router.post('/translations', createTranslation)

router.get('/translations', getTranslations)

module.exports = router
