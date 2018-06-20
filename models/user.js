const mongoose =require('../db/connections')
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema

const user = new Schema({
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
  user.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  user.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };
  module.exports =  mongoose.model("user", user);
