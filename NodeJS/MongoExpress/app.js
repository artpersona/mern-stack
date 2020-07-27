const MongoClient = require('mongodb').MongoClient; //imports the third party mongoclient which was installed using npm
const assert = require('assert'); // imports assert which is an error logging module
const url = 'mongodb://localhost:27017/'; // static url for mongodb --> this info can be found when running mongodb
const dbname = 'conFusion'; // database name
const dboperations = require('./operations');

// Note that all operations are inside the MongoClient
MongoClient.connect(url, (err,client) => {   // connects to the MongoClient

    assert.equal(err,null);  // error logging
    
    console.log('Connected to the server')

    const db = client.db(dbname); // getting the database
    dboperations.insertDocument(db,{name: "John Paul Perez", role: "Victim"}, 'dishes', (result) => {
        console.log(`This is the result: ${result}`)
    });

    
    dboperations.findDocuments(db,'dishes',(list) => {
        console.log(list)
        dboperations.updateDocument(db,{name: 'John Paul Perez'},{role:'Programmer'},'dishes', (result) => {
            console.log(result)
        })
    })
    
    






    const collection = db.collection('dishes'); // getting the specific collection or table (in relational terms)

    collection.insertOne({"name":"John Paul", "description":"willing victim"}); // Insertion of data
    collection.insertOne({"name":"debbie", "description":"heartbreaker"}, (err,result) => {
        assert.equal(err,null);
        console.log('After Insertion'); 
        console.log(result.ops);

    });

    collection.find({}).toArray((err,docs) => {   
        assert.equal(err,null);
        
        console.log('Found: ');
        console.log(docs);

        db.dropCollection('dishes', (err,result) => { // Drops the collection or table (in relational terms)
            assert.equal(err,null);
            console.log(result);

            client.close();  // closes the client
        })
    });

});


const express = require('express');
const app = express();

const PORT = 3000;

app.use((req,res,next) => {
    res.statusCode = 404;
    res.end('404 Not Found')
})


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

