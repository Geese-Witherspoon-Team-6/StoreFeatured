var faker = require('faker');

var genProducts = function(x) {
  var productObjects = [];
  for (var i = 0; i < x; i++) {
    var productItem = {
      sellerId: [faker.random.number(),faker.random.number()],
      imageUrl: 'tbd',
      price: faker.finance.amount(),
      name: faker.commerce.product()
    }
    productObjects.push(productItem)
  }
  return productObjects
};

var genSellers = function(x) {
  var sellerObjects = [];
  for (var i = 0; i < x; i++) {
    var sellerItem = {
      imageUrl: 'tbd',
      name: faker.company.companyName(),
      createdAt: faker.date.past(),
      totalSales: faker.finance.amount(),
      location: faker.address.city(),
    }
    sellerObjects.push(sellerItem)
  }
  return sellerObjects
};

// var productFakes = genProducts(100);
// var sellerFakes = genSellers(100);
// console.log(sellerFakes)
// console.log(productFakes)

module.exports.genProducts = genProducts;
module.exports.genSellers = genSellers;