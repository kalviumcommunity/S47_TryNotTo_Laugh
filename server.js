const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MemesModel = require('./index')
require('dotenv').config()
const joi = require('joi')
const app = express()
app.use(cors())
app.use(express.json())
  

const updateSchema = joi.object({
  Serial: joi.number().required(),
  Memes: joi.string().required(),
  Like: joi.number().required(),
  Dislike: joi.number().required()
})

const uri = process.env.MONGODB_URI
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.get('/',(req,res)=>{
      MemesModel.find({})
      .then(memes => res.json(memes))
    })

    app.delete('/deleteUser/:id', (req,res)=>{
      const id = req.params.id
      MemesModel.findByIdAndDelete({_id:id})
      .then(res => res.json(res))
      .catch(err => res.json(err))
  })

    app.post('/createMeme', (req,res)=>{
      const {error,value} = updateSchema.validate()
      if(error){
        console.log(error.details);
      }else{
        let { Serial, Memes, Like, Dislike } = req.body;  
        Serial = parseInt(Serial)
        Like = parseInt(Like)
        Dislike = parseInt(Dislike)  
        MemesModel.create({Serial, Memes, Like, Dislike })
          .then(meme => res.json(meme))
          .catch(err => res.json(err))
      }
    })

    app.get('/getUser/:id',(req,res)=>{
      const id = req.params.id;
      MemesModel.findById({_id:id})
      .then(users => res.json(users))
      .catch(err=> res.json(err))
  })

  app.put('/UpdateMeme/:id', (req, res) => {
    const id = req.params.id;
    const { Serial, Memes, Like, Dislike } = req.body; 
  
    MemesModel.findByIdAndUpdate(id, { Serial, Memes, Like, Dislike }, { new: true }) 
      .then(updatedMeme => res.json(updatedMeme)) 
      .catch(err => res.json(err));
  });

  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
});

app.listen(4200,()=>{
  console.log("server is running");
})