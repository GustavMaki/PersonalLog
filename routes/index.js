var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('backlog', { title: 'Home' });
});

router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Home' });
});

router.get('/account', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/favorites', function(req, res, next) {
  res.render('filter', { title: 'Home' });
});

module.exports = router;
