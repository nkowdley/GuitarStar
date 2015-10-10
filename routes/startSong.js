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
    db.collection('users').insert(newUsers);
});

module.exports = router;
