var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Home' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET backlog page. */
router.get('/backlog', function(req, res, next) {
  res.render('backlog', { title: 'Backlog' });
});

module.exports = router;
