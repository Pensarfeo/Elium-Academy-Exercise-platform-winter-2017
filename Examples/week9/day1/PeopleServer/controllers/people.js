const router  = require('express').Router();
require("../models/people")
const mongoose = require("mongoose")

/*
mongoose.model('people').find({}).remove().exec(
    function(){console.log("All people reacords removed")}
    )
*/

// check if user is signedIn before showing message; else redirect to /signIn
router.get('/people', (req,res) => {
    mongoose.model('people').
        find({}).
        exec(function (err, records) {
            console.log("All People", records)
            if (err) return res.status(400).json(err)
            res.json(records)
        })
})

// check if user is signedIn before showing message; else redirect to /signIn
router.get('/people/:id', (req,res) => {
    mongoose.model('people').
        find({_id: req.params.id}).
        exec(function (err, records) {
            if (err) return res.status(400).json(err)
            res.json(records)
        })
})


router.post('/people', function(req, res){
    mongoose.model('people').
        create(req.body, function (err, records) {
            if (err) {return res.status(400).json(err)}
            res.json(records)
        })
})


router.post('/people/delete', function(req, res){
    mongoose.model('people')
        .remove({_id: req.body._id})
        .exec(function (err, record) {
            if (err) {return res.status(400).json(err)}
            res.json(record)
        })
})

router.post('/people/update', function(req, res){
    const newInfo = Object.assign({}, req.body)
    delete newInfo._id

    mongoose.model('people').
        findOneAndUpdate({_id: req.body._id}, {$set: req.body}, {new: true}, function (err, record) {
            console.log("Updated", record)
            if (err) {return res.status(400).json(err)}
            if (!record) {return res.status(400).json({error: "record not found"})}
            res.json(record)
        })
})


module.exports = router
