var Translation = require('./translation-model')
var log = require('bole')('translation/router')
var router = require('express').Router()

// TODO: this is not creating the fields properly
// function createTranslation (req, res, next) {
//
//     const util = require('util')
//     console.log(util.inspect(req, {showHidden: false, depth: null}))
//
//     // this doesn't have the POST in it:
//     // var cache = [];
//     // strigified_debug = JSON.stringify(req, function(key, value) {
//     //     if (typeof value === 'object' && value !== null) {
//     //         if (cache.indexOf(value) !== -1) {
//     //             // Circular reference found, discard key
//     //             return;
//     //         }
//     //         // Store value in our collection
//     //         cache.push(value);
//     //     }
//     //     return value;
//     // });
//     // console.log("hello!!\n%s\n", strigified_debug);
//
//     const translation = new Translation({translation: req.translation});
//     translation.provider = 'local';
//     translation.save();
//     res.json(translation);
//     // Translation.create({translation: req.body.translation}, function (err, post) {
//     //     if (err) return next(err);
//     //     res.json(post);
//     // }).save();
// }

function createTranslation (req, res, next) {
    // Create and Save a new Note
    if(!req.body) {
        res.status(400).send({message: "No body in request!"});
        return;
    } else if ( !req.body.translation) {
        res.status(400).send({message: "Translation can not be empty"});
        return;
    }

    // TODO: handle if there is a "root" property
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
