var mongoose = require('mongoose');
//var app = express();
var schema = new mongoose.Schema({
  //schema setup
  name: String,
  song_name: String,
  score:Number,
  actions: [],
});

module.exports = mongoose.model('users', schema);
