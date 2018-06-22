const mongoose =require('../db/connections')
const Schema = mongoose.Schema

const Songs = new Schema({
    content: String,
    title: String,
        artist: {
        name: String
      },
      genre: String,
  });
  module.exports = mongoose.model("Songs", Songs);