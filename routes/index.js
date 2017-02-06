var express = require('express');
var fs = require('fs');
var router = express.Router();
var title = 'Marvelous Squishy Connection Machine';
var comicSlugs = require('../comicSlugs.js') // array of slugs

/* GET home page. */
router.get('/', function(req, res, next) {
  var latestComicIndex = comicSlugs.length - 1; // length is assured to be >= 1
  var latestComicSlug = comicSlugs[latestComicIndex];
  res.render('index', {
    title: title,
    comicTitle: latestComicSlug.replace(/\-/g, ' '), 
    imagePath: '/images/' + latestComicSlug + '.jpg',
    prevComicSlug: latestComicIndex > 0 ? comicSlugs[latestComicIndex - 1] : null,
    nextComicSlug: null 
  });
});

/* GET a comic page. */
router.get('/:comicSlug', function(req, res, next) {
  var comicIndex = comicSlugs.indexOf(req.params.comicSlug);
  res.render('index', { 
    title: title,
    comicTitle: req.params.comicSlug.replace(/\-/g, ' '), 
    imagePath: '/images/' + req.params.comicSlug + '.jpg',
    prevComicSlug: comicIndex > 0 ? comicSlugs[comicIndex - 1] : null,
    nextComicSlug: (comicSlugs.length - 1) > comicIndex ? comicSlugs[comicIndex + 1] : null
  });
});

module.exports = router;
