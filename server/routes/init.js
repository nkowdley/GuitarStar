var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db=mongoose.connection;
  //delete everything from the database
  db.collection('tabs').remove({});
  //create some dummy songs
  var song={
    name: "Never Gonna Give You Up",
    tabs: ["1","2","3","4","5","6","1"],
    spotify: "https://p.scdn.co/mp3-preview/244a8fa4eeb3fe315c2aeee35b85b0509fb9b09b"
  };
  db.collection('tabs').insert(song);

  song={
    name: "Single Ladies(Put a Ring on It)",
    tabs: ["1","2","3","4","5","6","1"],
    spotify: "https://p.scdn.co/mp3-preview/c203f810b3e971ae9d37769b5f47a04415d29b48"
  };
  db.collection('tabs').insert(song);

  song={
    name: "Hooked on a Feeling",
    tabs: ["1","2","3","4","5","6","1"],
    spotify: "https://p.scdn.co/mp3-preview/e755aa6504cbb02c5afaac933d33ae495bcc80e4"
  };
  db.collection('tabs').insert(song);

  res.send("ok");
});

module.exports = router;
