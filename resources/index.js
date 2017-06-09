var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ winner: 'cookie-cage' });
});

module.exports = router;
