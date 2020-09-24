const mongoose = require('mongoose');
var seeds = require('./seedData.js')
var _ = require('lodash');
mongoose.connect('mongodb://localhost/qtsy', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));


/* in mongoose, each schema maps to a MongoDB collection and defines
 the shape of documents in that collection */
let productSchema = mongoose.Schema({
  sellerId: [Number],
  imageUrl: String,
  price: Number,
  name: String
});

let sellerSchema = mongoose.Schema({
  imageUrl: String,
  name: String,
  createdAt: String,
  totalSales: Number,
  location: String
})

/* in mongoose, to make use of a schema definition it needs to be
 converted to a model, like so: */
let Product = mongoose.model('Product', productSchema);
let Seller = mongoose.model('Seller', sellerSchema);

/* to create new documents use the following syntax:
  let newSeller = new Seller({
    imageUrl: imageVar,
    name: nameVar,
    etc...
  })
  then, to save a document to the database, call its save method:
  newSeller.save((err, newSeller) => {
    if (err) {
      return console.log(err)
    }
  }) */