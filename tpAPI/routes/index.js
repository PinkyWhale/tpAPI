var express = require('express');
var router = express.Router();

/* ID de cliente ojq7x24ftqbzx1uevy6o5had2c5mbc */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TPcharlaAPI' });
});

module.exports = router;
