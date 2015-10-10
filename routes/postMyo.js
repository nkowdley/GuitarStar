var express = require('express');
var mongoose = require('mongoose');
var db=mongoose.connection;
var users= require('../models/users.js'); //mongodb for users
var ObjectId = require('mongoose').Types.ObjectId; //setup type objectId
var router = express.Router();

/* Accept Post Request page. */
router.post('/', function(req, res, next) {
  //get post variables
  var user=req.body.user; //username
  var action=req.body.action; //action
  //var song=req.body.song; //song name
  //find the user and push an update to their myo string
  var query = {'username':user};
  db.collection('users').findOneAndUpdate(query, {$push: {actions: action}}, {upsert:false}, function(err, doc){
    if (err)
    {
      return res.send(500, { error: err });
    }
  });
  res.send("ok");

});

module.exports = router;
