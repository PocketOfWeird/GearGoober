const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Tennant = require('./tennant')
const Category = require('./category')


const Equipment = mongoose.model('Equipment', new Schema({
    tennantId: {type: Schema.Types.ObjectId, ref: Tennant, index: true},
    name: {type: String, text: true}, // creates a text index
    categoryId: {type: Schema.Types.ObjectId, ref: Category, index: true},
    category: String,
    imageUrl: String,
    mfg: {type: String, text: true},
    model: {type: String, text: true},
    price: Number,
    qty: Number,
    inKit: Boolean,
    barcodes: [{
        barcode: {type: String, text: true},
        checkedIn: Boolean,
        damaged: Boolean,
        missing: Boolean
    }]
}))

module.exports = Equipment
