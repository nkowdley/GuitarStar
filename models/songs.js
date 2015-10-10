var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  //schema setup
  name: String,
  tabs: [],
});

module.exports = mongoose.model('songs', schema);
