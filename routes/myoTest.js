var express = require('express');
var router = express.Router();

/* Accept Post Request page. */
router.get('/', function(req, res, next) {
  //get post variables
  var test=req.body.test; //username
  res.send(test);

});

module.exports = router;
