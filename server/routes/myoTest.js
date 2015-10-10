var express = require('express');
var router = express.Router();

/* Accept Post Request page. */
router.post('/', function(req, res, next) {
  //get post variables
  var test=req.body.test; //username
  console.log(test);
  res.send(test);

});

module.exports = router;
