var mongoose = require('mongoose');
//var app = express();
var schema = new mongoose.Schema({
  //schema setup
  name: String,
  tabs: [],
  spotify: String,
});

module.exports = mongoose.model('tabs', schema);
