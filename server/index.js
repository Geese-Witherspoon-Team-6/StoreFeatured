// eslint-disable-next-line no-unused-vars
var path = require('path');
const express = require('express');
var bodyparser = require('body-parser');
var mongo = require('../database/index.js');
const cors = require('cors');
const app = express();

const port = 3004;

app.use(cors());
app.use(bodyparser());
app.use(express.urlencoded({ extended: false }))
app.use('/listing/:itemId', express.static(path.join(__dirname, '../client/dist')))
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});

app.get('/api/listing/:itemId', (req, res) => {
  let sellerID = req.params.itemId;
  mongo.getSeller(sellerID, (info) => {
    res.send(info)
    res.end();
  })
});

app.get('/store', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/main.js'));
});