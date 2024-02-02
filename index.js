const mongoose = require('mongoose')

const MemesSchema = new mongoose.Schema({
  Serial : Number,
  Memes : String,
  Like : Number,
  Dislike : Number
})

const MemesModel = mongoose.model("Memes",MemesSchema)
module.exports = MemesModel;