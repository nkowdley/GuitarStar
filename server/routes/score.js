var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
/* GET score for user. */
router.get('/', function(req, res, next) {
  //get the players name
  var name1=req.query['name'];
  //get the song they are playing
  var songName=req.query['songName'];
  //set the db
  var db=mongoose.connection;
  //var user;
  //get the players actions
  db.collection('users').findOne({name:name1},function(err, user){
    if (err)
    {
      return res.send(500, { error: err });
    }
    else
    {
      //get the expected tabs
      db.collection('tabs').findOne({name:songName},function(err, tab){
        if (err)
        {
          return res.send(500, { error: err });
        }
        //Im sorry.  Really sorry.
        //compare the users tabs to the expected tab output
        //var PrintString='';
        var score=0;//initialize the score
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
          score=score*2;
          db.collection('users').findOneAndUpdate({name:name},{score:score}, {upsert:false}, function(err, doc){
            if (err)
            {
              return res.send(500, { error: err });
            }
          });
          res.send(score.toString());
        }
      });
    }
  });
});
module.exports = router;
