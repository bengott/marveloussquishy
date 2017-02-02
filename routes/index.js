var express = require('express');
var router = express.Router();
var title = 'Marvelous Squishy Connection Machine';
var latestComicID = 'sleep-loves-me'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: title,
    comicID: latestComicID,
    comicTitle: latestComicID.replace(/\-/g, ' '), 
    imagePath: '/images/' + latestComicID + '.jpg'
  });
});

/* GET a comic page. */
router.get('/:comicID', function(req, res, next) {
  res.render('index', {
    title: title,
    comicID: req.params.comicID,
    comicTitle: req.params.comicID.replace(/\-/g, ' '), 
    imagePath: '/images/' + req.params.comicID + '.jpg'
  });
});

module.exports = router;
