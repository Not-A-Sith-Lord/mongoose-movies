var express = require('express');
var Celebs = require('../models/celebs');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

  Celebs.find((err, celebArray) => {
    if (err) return next(err);

    console.log(celebArray);
    res.render('index', {
      celebs: celebArray,
      title: 'Express'
    }

  );
  });

});

module.exports = router;
