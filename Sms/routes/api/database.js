const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://instudio:instudio1@ds119652.mlab.com:19652/instudio', (err, client) => {
    // Client returned
    var db = client.db('instudio');
    db.collection('tracks');
  });