const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Character = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  edited: Date,
  created: Date,
  gender: String,
  height: Number, // typo was a string ugggh why!
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  key: {
    type: Number,
    unique: true
  },
  homeworld_key: Number,
  // add homeworld field that links the character to it's planet
  homeworld: {
    type: ObjectId,
    ref: 'Planet'
  }
});

module.exports = mongoose.model('Character', Character);