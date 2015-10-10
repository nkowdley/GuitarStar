var express = require('express');
var mongoose = require('mongoose');
var db=mongoose.connection;
var users= require('../models/users.js'); //mongodb for users
var ObjectId = require('mongoose').Types.ObjectId; //setup type objectId
var router = express.Router();

/* Accept Post Request page. */
router.post('/', function(req, res, next) {
  //create JSON Object
  var newUsers={
    name: req.body.name,
    song_name: req.body.songName,
    score:0, //initial score is 0
    actions: [], //empty actions
  };
  var query={name:req.body.name};
  db.collection('users').findOneAndUpdate(query,{song_name:req.body.songName,score:0,actions:[], name:req.body.name} , {upsert:true}, function(err, doc){
    if (err)
    {
      return res.send(500, { error: err });
    }
  });
});

module.exports = router;
