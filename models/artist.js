const mongoose =require('../db/connections')
const Schema = mongoose.Schema

const Artist = new Schema({
    content: String,
    artist: {
        name: String
    },
    title: {
        type: String
      },
      Genre:[
          { 
          type: String,
          enum: ['indie','rock','hip-hop','other']
      }
    ]
  });
  module.exports = mongoose.model("Artist", Artist);
