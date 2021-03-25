var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Math.floor() applied to randomValue is [y]”);
  var randomValue=Math.random();
  if(req.query.randomValue){
    randomValue=req.query.randomValue
  }
  
  res.send(`Math.floor() applied to ${(randomValue)} is ${Math.floor(randomValue)}`);
  
  
});

module.exports = router;
