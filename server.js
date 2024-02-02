const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { MongoClient } = require('mongodb');
const MemesModel = require('./index')

const app = express()
app.use(cors())
app.use(express.json())

const uri = 'mongodb+srv://ansh:ansh@cluster0.dhmosqv.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    const database = client.db('ASAP');
    const collection = database.collection('Memes');

    app.get('/', async (req,res)=>{
    const result = await collection.find({}).toArray();
      res.json(result);
    })
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
});

app.listen(4200,()=>{
  console.log("server is running");
})