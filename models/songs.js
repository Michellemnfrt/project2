const mongoose =require('../db/connections')
const Schema = mongoose.Schema

const Songs = new Schema({
    content: String,
    title: String,
        artist: {
        name: String
      },
      genre: String,
      author:
      { type: Schema.Types.ObjectId, 
        ref: 'User'
      }
    });
  
  module.exports = mongoose.model("Songs", Songs);
   