const mongoose = require('mongoose');
var seeds = require('./seedData.js');
var images = require('./birds.js')
var _ = require('lodash');
mongoose.connect('mongodb://localhost/qtsy', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));

let productSchema = mongoose.Schema({
  _id: Number,
  sellerId: Number,
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


var loadSeedData = function(closeDB) {
  var iD = 1;
  var bird = 0;
  db.once('open', () => {
    _.map(seeds.seedProducts, (product) => {
      let newProduct = new Product({
        _id: iD,
        sellerId: iD,
        imageUrl: images.birds[bird],
        price: product.price,
        name: product.name
      })
      newProduct.save((err) => {
        if (err) {
          console.error(err)
        }
      })
      iD++
      if (bird < 27) {
        bird++
      } else {
        bird = 0;
      }
    })
    iD = 1;
    _.map(seeds.seedSellers, (seller) => {
      let newSeller = new Seller({
        _id: iD,
        imageUrl: "https://qtlyimages.s3-us-west-2.amazonaws.com/logoSquare2.png",
        name: seller.name,
        createdAt: seller.createdAt,
        totalSales: seller.totalSales,
        location: seller.location,
        products: [iD, iD + 1, iD + 2, iD + 3, iD + 4, iD + 5, iD + 6, iD + 7]
      })
      newSeller.save((err) => {
        if (err) {
          console.error(err)
        }
      })
      iD++
    })
  })
  closeDB();
};

loadSeedData(() => {
  // db.close()
});