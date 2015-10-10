var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var db=mongoose.connection;
var users= require('../models/songs.js'); //mongodb for users
var ObjectId = require('mongoose').Types.ObjectId; //setup type objectId
/* GET home page. */
router.get('/', function(req, res, next) {
//find in the database
var find=req.body.songName;
  db.collection('tabs').findOne({name:find},function (err, song) {
    if (err)
    {
      console.log("Error:(err)");
      return next(err);
    }
    res.json(song);
  });
});

module.exports = router;
