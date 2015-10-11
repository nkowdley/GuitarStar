var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var user1;
var tab1;
var score=0;
var db=mongoose.connection;
/* GET score for user. */
router.get('/', function(req, res, next) {
  //get the players name
  db.collection('users').find().toArray(function(err, scores){
    if (err)
    {
      return res.send(500, { error: err });
    }
    res.send(scores);
  });
});
module.exports = router;
