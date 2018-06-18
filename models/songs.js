const mongoose =require('../db/connections')
const Schema = mongoose.Schema

const songs = new Schema({
    content: String,
    title: {
        type: String,
    },  
        artist: {
        name: String,
      },
      Genre:[
          { 
          type: String,
          enum: ['indie','rock','hip-hop','other']
      }
    ]
  });
  module.exports = mongoose.model("songs", songs);