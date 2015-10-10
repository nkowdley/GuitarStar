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
    console.log("hi");
    var json=JSON.parse(body);
    var arr=new Array();
    console.log("hi");
    for (var i=0;i<60;i++)
    {
      arr.push(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    }
    var song={
      name: find,
      tabs: arr,
      spotify: json.tracks.items[0].preview_url
    };
    console.log("hi");
    db.collection('tabs').insert(song);//insert the song for the user
    res.send(song);
  });
});

module.exports = router;
