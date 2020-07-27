const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';
const operations = require('./dboperations')

MongoClient.connect(url, (err,client) => {
   assert.equal(err,null);
   console.log('DB is running')
})