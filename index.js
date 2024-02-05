const mongoose = require('mongoose')

const MemesSchema = new mongoose.Schema({
  Serial :{
    type : Number
  },
  Memes : {
    type: String
  },
  Like : {
    type: Number
  },
  Dislike : {
    type:Number
  }
})

const MemesModel = mongoose.model("Memes",MemesSchema)
module.exports = MemesModel;