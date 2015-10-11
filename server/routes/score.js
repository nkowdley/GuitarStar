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
  var name1=req.query['name'];
  console.log(name1);
  //get the song they are playing
  var songName=req.query['songName'];
  //set the db
  //var user;
  //get the players actions
  console.log("yolo");
  db.collection('users').findOne({name:name1},function(err, user){
    if (err)
    {
      return res.send(500, { error: err });
    }
    console.log(user);
    //get the expected tabs
    var db=mongoose.connection;
    db.collection('tabs').findOne({name:songName},function(err, tab){
      console.log(user);
      if (err)
      {
        return res.send(500, { error: err });
      }
      //Im sorry.  Really sorry.
      //compare the users tabs to the expected tab output
      //var PrintString='';
      for(var i=0; i<user.actions.length; i++)
      {
        if (user.actions[i]==tab.tabs[i])
        {
          score++;
        }
        else
        {
          console.log(user.actions[i]+"!="+tab.tabs[i])
        }
      }
      score=score*2;
      db.collection('users').findOneAndUpdate({name:name1},{score:score}, {upsert:false, new: true}, function(err, doc){
        if (err)
        {
          return res.send(500, { error: err });
        }
        return res.send(score.toString());
      });
    });
  });
});
module.exports = router;
