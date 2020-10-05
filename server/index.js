// eslint-disable-next-line no-unused-vars
var path = require('path');
const express = require('express');
var bodyparser = require('body-parser');
var mongo = require('../database/index.js');
const app = express();

const port = 8080;

app.use(bodyparser());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});

app.get('/api/seller/:sellID', (req, res) => {
  let sellerID = req.params.sellID;
  mongo.getSeller(sellerID, (info) => {
    res.send(info)
    res.end();
  })
})