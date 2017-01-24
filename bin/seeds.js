const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebs-dev');
const Celeb = require('../models/celebs');

const celebData = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];


Celeb.create(celebData, (err, docs) => {
  if (err) { throw err };

  docs.forEach( (celeb) => {
    console.log(celeb.name)
  })
  mongoose.connection.close();
});
