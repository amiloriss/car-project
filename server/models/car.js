const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const car = new Schema({
  model: String,
  color: String,
  personId: String,
});
