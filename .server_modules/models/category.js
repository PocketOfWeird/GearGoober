const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Tennant = require('./tennant')


const Category = mongoose.model('Category', new Schema({
  tennantId: {type: Schema.Types.ObjectId, ref: Tennant, index: true},
  name: String,
  parent: {type: Schema.Types.ObjectId, ref: this}
}))

module.exports = Category
