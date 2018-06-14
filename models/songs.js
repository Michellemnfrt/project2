const mongoose =require('../db/connections')
const Schema = mongoose.Schema

const songs = new Schema({
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