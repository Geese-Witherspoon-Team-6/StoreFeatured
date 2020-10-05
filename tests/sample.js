const sellerObject = {
  products: [ [Object], [Object], [Object] ],
  _id: 1,
  imageUrl: 'https://qtlyimages.s3-us-west-2.amazonaws.com/logoSquare2.png',
  name: 'Mincing Mockingbird',
  createdAt: '2020-06-09T18:12:50.773Z',
  totalSales: 311.29,
  location: 'California',
  __v: 0
};
const sellerText = 'Mincing MockingbirdTotal Sales: $311.29Joined: 4 months agoLocation: California';
const sellerText2 = sellerText.slice(0, 69).concat('Nebraska');
const productInfo = {"sellerId":[1],"_id":1,"imageUrl":"https://qtlyimages.s3-us-west-2.amazonaws.com/7022hub_web_large.jpg","price":973.21,"name":"Fish","__v":0};

const fakeSeller = [{"products":[{"sellerId":[1],"_id":1,"imageUrl":"https://qtlyimages.s3-us-west-2.amazonaws.com/7022hub_web_large.jpg","price":973.21,"name":"Fish","__v":0},{"sellerId":[2],"_id":2,"imageUrl":"https://qtlyimages.s3-us-west-2.amazonaws.com/7024loo-web_large.jpg","price":590.6,"name":"Hat","__v":0},{"sellerId":[4],"_id":4,"imageUrl":"https://qtlyimages.s3-us-west-2.amazonaws.com/7027dev_web_large.jpg","price":926.87,"name":"Ball","__v":0},{"sellerId":[5],"_id":5,"imageUrl":"https://qtlyimages.s3-us-west-2.amazonaws.com/7029she_web_large.jpg","price":471.68,"name":"Sausages","__v":0},{"sellerId":[8],"_id":8,"imageUrl":"https://qtlyimages.s3-us-west-2.amazonaws.com/7034pod_web_large.jpg","price":951.68,"name":"Gloves","__v":0},{"sellerId":[7],"_id":7,"imageUrl":"https://qtlyimages.s3-us-west-2.amazonaws.com/7033liq_web_large.jpg","price":5.55,"name":"Bacon","__v":0}],"_id":1,"imageUrl":"https://qtlyimages.s3-us-west-2.amazonaws.com/logoSquare2.png","name":"Mincing Mockingbird","createdAt":"2020-06-09T18:12:50.773Z","totalSales":311.29,"location":"California","__v":0}]

module.exports = {
  sellerObject,
  sellerText,
  sellerText2,
  productInfo,
  fakeSeller
};
