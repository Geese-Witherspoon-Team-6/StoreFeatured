
const genSellers = require('../database/generateData.js');

test('generates an array of objects', () => {
  expect(genSellers.genSellers(1)).toExist();
});