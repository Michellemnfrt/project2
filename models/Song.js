const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Song = new Schema({
  content: String,
  //   title: String,
  //   artist: {
  //     name: String
  //   },
  //   genre: String,
  //   author: {
  //     type: Schema.Types.ObjectId,
  //     ref: "User"
  //   }
  // });
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [Comment]
});

module.exports = {
  Song: mongoose.model("Song", Song),
  Comment: mongoose.model("Comment", Comment)
};
