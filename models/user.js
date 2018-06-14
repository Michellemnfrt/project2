var mongoose =require('./db/connection')
schema = mongoose.schema

var userSchema = new Schema({
    local: {
        email: String,
        password: String
      },
      uploads: [
        {
          type: Schema.Types.ObjectId,
          ref: "Songs"
        }
    ]
  });
  module.exports = mongoose.model("User", User);