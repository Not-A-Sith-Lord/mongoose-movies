const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  const CelebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celeb = mongoose.model('Celeb', CelebSchema);


module.exports = Celeb;