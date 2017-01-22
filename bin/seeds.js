// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebs-dev');
const Celeb = require('../models/celebrity');

const seedData = [
  { name: 'Kimmy K', occupation: 'Fabulous', catchPhrase: 'No Kanye not again' },
  { name: 'Mickey', occupation: 'Full time mouse', catchPhrase: 'Tralala' },
  { name: 'Kanye', occupation: 'President', catchPhrase: 'I love Kanye' }
];

Celeb.create(seedData, (err, docs) => {
  if (err) { throw err };

  docs.forEach( (celeb) => {
    console.log(celeb.name)
  })
  
  mongoose.connection.close();
});