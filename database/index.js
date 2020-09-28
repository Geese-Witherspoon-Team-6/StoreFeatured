const mongoose = require('mongoose');
var seeds = require('./seedData.js')
var _ = require('lodash');
mongoose.connect('mongodb://localhost/qtsy', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));

let productSchema = mongoose.Schema({
  _id: Number,
  sellerId: [Number],
  imageUrl: String,
  price: Number,
  name: String
});

let sellerSchema = mongoose.Schema({
  _id: Number,
  imageUrl: String,
  name: String,
  createdAt: String,
  totalSales: Number,
  location: String,
  products: [{type: Number, ref: 'Product'}]
})

let Product = mongoose.model('Product', productSchema);
let Seller = mongoose.model('Seller', sellerSchema);


var getSeller = function(sellername, info) {
  Seller.find({name: sellername})
    .populate("products")
    .then((result) => {
      console.log('POPULATE RESULT ---------')
      console.log(result)
    })
    .catch((err) => {
      console.error(err)
    })
}

module.exports.getSeller = getSeller;