var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  //schema setup
  activityName: String,
  lat: String,
  lng: String,
  time: String,
  numberofPeople:Number,
});

module.exports = mongoose.model('activities', schema);
