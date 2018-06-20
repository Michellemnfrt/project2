const mongoose =require('../db/connections')
const Schema = mongoose.Schema

const Songs = new Schema({
    content: String,
    title: {
        type: String
    },  
        artist: {
        name: String
      },
      genre:[
          { 
          type: String,
          enum: ['indie','rock','hip-hop','other']
      }
    ]
  });
  module.exports = mongoose.model("Songs", Songs);