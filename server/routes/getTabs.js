var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var db=mongoose.connection;
var songs= require('../models/songs.js'); //mongodb for users
var ObjectId = require('mongoose').Types.ObjectId; //setup type objectId
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  //find in the database
  var find=req.query['songName'];
  //check if there is data in the db for this song:
  db.collection('tabs').findOne({name:find},function (err, song) {
    if (err)
    {
      console.log("Error:(err)");
      return next(err);
    }
    if (song!==null)
    {
      res.json(song);
    }
  });
  //if the song is not in the database, lets find it
  //search
  var query=find.split(' ').join('+');
  //var url="https://api.spotify.com/v1/search?q="+query;
  request({
    url: 'https://api.spotify.com/v1/search',
    qs: {q: query, type:'track',limit:1},
    method: 'GET',
  }, function(error, response, body){
    if(error)
    {
      console.log(error);
      return next(error);
    }
    var json=JSON.parse(body);
    //if the user enters a song that does not exist, play a fun song
    console.log(json.tracks.total=='0');
    //make the random tabs array
    var arr=new Array();
    for (var i=0;i<60;i++)
    {
      arr.push(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    }
    if(json.tracks.total=='0')
    {
      var song1={
        name: find,
        tabs: arr,
        spotify:"https://p.scdn.co/mp3-preview/3e0ab26bf59121debd9fc1bbab7b6931c2e1ca00"
      };
      res.send(song1);
      return;
    }
    //if the song does exist,
    var song={
      name: find,
      tabs: arr,
      spotify: json.tracks.items[0].preview_url
    };
    db.collection('tabs').insert(song);//insert the song for the user
    res.send(song);
  });
});

module.exports = router;
