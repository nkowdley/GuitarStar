var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
/* GET score for user. */
router.get('/', function(req, res, next) {
  //get the players name
  var name1=req.query['name'];
  //set the db
  var db=mongoose.connection;
  //get the players actions
  db.collection('users').findOne({name:name1},function(err, user){
    if (err)
    {
      return res.send(500, { error: err });
    }
    else
    {
      res.send(user.actions);
    }
  });
  //compare the users tabs to the expected tab output
  var score=0;//initialize the score

});


module.exports = router;
