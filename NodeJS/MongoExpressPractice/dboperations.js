const assert = require('assert');
exports.insertDocument = (db,document,collection, callback) => {
    const collect = db.collection(collection);
    collect.insertOne(document,(err,resut) => {
        assert.equal(err,null)
        callback(result)
    });
}

exports.getDocuments = (db,collection,callback) => {
    const collect = db.collection(collection);
    collect.find({}).toArray((err,docs) => {
        callback(docs);
    })
}