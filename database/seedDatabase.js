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
  location: String
})

let Product = mongoose.model('Product', productSchema);
let Seller = mongoose.model('Seller', sellerSchema);


var loadSeedData = function(closeDB) {
  var iD = 1;
  db.once('open', () => {
    _.map(seeds.seedProducts, (product) => {
      let newProduct = new Product({
        _id: iD,
        sellerId: [iD, iD + 1, iD + 2, iD + 3, iD + 4],
        imageUrl: product.imageUrl,
        price: product.price,
        name: product.name
      })
      newProduct.save((err, newProduct) => {
        if (err) {
          console.log(err)
        }
      })
      iD++
    })
    iD = 1;
    _.map(seeds.seedSellers, (seller) => {
      let newSeller = new Seller({
        _id: iD,
        imageUrl: seller.imageUrl,
        name: seller.name,
        createdAt: seller.createdAt,
        totalSales: seller.totalSales,
        location: seller.location
      })
      newSeller.save((err, newSeller) => {
        if (err) {
          console.log(err)
        }
      })
      iD++
    })
  })
  closeDB();
};

loadSeedData(() => {
  db.close()
});