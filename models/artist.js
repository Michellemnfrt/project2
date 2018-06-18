const mongoose =require('../db/connections')
const Schema = mongoose.Schema

const artist = new Schema({
    content: String,
    artist: {
        name: String,
    },
    title: {
        type: String,
      },
      Genre:[
          { 
          type: String,
          enum: ['indie','rock','hip-hop','other']
      }
    ]
  });

  module.exports = { artist: mongoose.model("artist", artist)
};