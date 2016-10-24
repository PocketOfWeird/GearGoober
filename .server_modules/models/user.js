const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Tennant = require('./tennant')

const User = mongoose.model('User', new Schema({
  tennantId: {type: Schema.Types.ObjectId, ref: Tennant, index: true},
  email: {type: String, index: true},
  firstName: {type: String, text: true}, // creates a text index
  lastName: {type: String, text: true},
  imageUrl: String,
  phoneNumber: String,
  addressOne: String,
  addressTwo: String,
  city: String,
  state: String,
  zip: String,
  password: String,
  admin: Boolean,
  manager: Boolean,
  labAssistant: Boolean
}))

module.exports = User
