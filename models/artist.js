const mongoose =require('../db/connections')
const Schema = mongoose.Schema

const Artist = new Schema({
    content: String,
    artist: {
        name: String
    },
    title: String,
      genre: String,
          
  })
  module.exports = mongoose.model("Artist", Artist);
