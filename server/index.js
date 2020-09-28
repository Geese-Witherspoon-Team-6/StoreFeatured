var path = require('path');
const express = require('express');
var bodyparser = require('body-parser');
var mongo = require('../database/index.js');
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});

app.get('/test', (req, res) => {
  res.send('GET Request received at /test')
  res.end()
});

app.use(bodyparser());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/seller', (req, res) => {
  mongo.getSeller(req.body.sellerName, (info) => {
    res.status(200).send(info)
  })
  res.end();
})