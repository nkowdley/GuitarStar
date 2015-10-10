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
  console.log(find);
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
  console.log(query);
  request({
    url: 'https://api.spotify.com/v1/search',
    qs: {q: query, type:'track',limit:1},
    method: 'GET',
  }, function(error, response, body){
    if(error)
    {
      console.log(error);
    }
    else
    {
      var json=JSON.parse(body);
      //console.log(response.statusCode, json.tracks.items[0].preview_url);
      //make random numbers to fill in the tabs:
      var arr=new Array();
      for (var i=0;i<30;i++)
      {
        arr.push(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
      }
      var song={
        name: find,
        tabs: arr,
        spotify: json.tracks.items[0].preview_url
      };
      db.collection('tabs').insert(song);//insert the song for the user
    }
  });

  //get the song info from the db
  db.collection('tabs').findOne({name:find},function (err, song) {
    if (err)
    {
      console.log("Error:(err)");
      return next(err);
    }});
  });

  module.exports = router;
