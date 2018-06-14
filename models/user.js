const mongoose =require('./db/connections')
const Schema = mongoose.Schema

var user = new Schema({
    local: {
        email: String,
        password: String
      },
      uploads: [
        {
          type: Schema.Types.ObjectId,
          ref: "songs"
        }
    ]
  });
  module.exports =  mongoose.model("user", user);
