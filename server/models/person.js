const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const person = new Schema({
  name: String,
  age: Number,
  gender: String,
});

module.exports = mongoose.model('Person', person);
