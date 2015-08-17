var express = require('express');
var router = express.Router();
var path = require('path');
var Stuff = require('../models/tasks');

router.delete("/:id", function(req, res, next){    //used remove and called the ID off the body object
    Stuff.remove({ _id: req.body.id }, function(err) {
        if (!err) {
        }
        else {
            console.log('Delete Not Working Fool!');
        }
    });
    res.send("Done");
});

router.put('/:id', function(req, res, next){
    Stuff.findByIdAndUpdate(req.params.id, req.body, function(err, tasks){
        return Stuff.find({}).exec(function(err, tasks){
            if(err) throw new Error(err);
            res.send(JSON.stringify(tasks));
        });
    });
});

router.post('/', function(req, res, next){
    Stuff.create(req.body, function(err, post){
       res.send("Done");
    });
});

router.get('/', function(req, res, next){
   Stuff.find(function(err, tasks){
       res.json(tasks);
   })
});

module.exports = router;