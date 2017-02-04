var express = require('express');
var fs = require('fs');
var router = express.Router();
var title = 'Marvelous Squishy Connection Machine';
var comics = JSON.parse(fs.readFileSync('comics-list.json')).comics;
var latestComic = comics[comics.length - 1];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: title,
    comicTitle: latestComic.title.replace(/\-/g, ' '), 
    imagePath: '/images/' + latestComic.title + '.jpg'
  });
});

/* GET a comic page. */
router.get('/:comicTitle', function(req, res, next) {
  res.render('index', {
    title: title,
    comicTitle: req.params.comicTitle.replace(/\-/g, ' '), 
    imagePath: '/images/' + req.params.comicTitle + '.jpg'
  });
});

module.exports = router;
