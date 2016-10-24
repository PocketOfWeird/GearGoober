const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Tennant = mongoose.model('Tennant', new Schema({
  name: String,
  subdomain: String,
  colorTheme: String
}))

module.exports = Tennant
