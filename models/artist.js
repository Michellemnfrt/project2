var mongoose =require('./db/connection')
schema = mongoose.schema

var artistSchema = new Schema({
    artist: {
        name: String,
    },
    title: {
        type: String,
      },
      Genre:{ 
          type: string,
          enum: ['indie','rock','hip-hop','other']
      }
  });
  module.exports = mongoose.model("Artist", Artist);