const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MemesModel = require('./index')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const uri = process.env.MONGODB_URI
console.log(uri);
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.get('/',(req,res)=>{
      MemesModel.find({})
      .then(memes => res.json(memes))
    })

    app.post('/createMeme', (req,res)=>{
      let { Serial, Memes, Like, Dislike } = req.body;  
      Serial = parseInt(Serial)
      Like = parseInt(Like)
      Dislike = parseInt(Dislike)  
      MemesModel.create({Serial, Memes, Like, Dislike })
        .then(meme => res.json(meme))
        .catch(err => res.json(err))
    })

  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
});

app.listen(4200,()=>{
  console.log("server is running");
})