var express = require('express');
var Celebs = require('../models/celebs');
var router = express.Router();

/* GET home page. */
router.get('/celebs', function(req, res, next) {
  res.render('celeb-list', { title: 'Express' });
});

//End celeb index route

router.get("/celebs/new", (req, res, next) => {
  res.render("new");
});

//End celebs get new route

router.post("/celebs/new", (req, res, next) => {
  const newCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebs.create(newCeleb, (err, docs) => {
  if (err) { throw err };

  console.log(`Created ${newCeleb.name}`);
});
  res.redirect("/");
});

//End Celebs new route

router.get("/celebs/:id/edit", (req, res, next) => {
  const celebId = req.params.id;
  Celebs.findById(celebId, (err, query) => {
    res.render("edit_celeb", {
      celeb: query
    });
  });


});


router.post('/celebs/:id', (req, res, next) => {
  const updatedCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  const celebId = req.params.id;

  Celebs.update({_id: celebId}, updatedCeleb, (err, something) => {
    if (err) return next(err);

    res.redirect('/');
  });
});

router.get("/celebs/:id", (req, res, next) => {
  const celebId = req.params.id;
  console.log("I shouldn't be seeing this");
  Celebs.findById(celebId, (err, something) => {
    if (err) return next(err);

    res.render("show_celeb", {
      celeb: something
    });
  });
});



module.exports = router;