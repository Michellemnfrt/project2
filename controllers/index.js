// const  Songs  = require("../models/Songs");

module.exports = {
    index: (req, res) => {
      res.render("index", { page: "homepage" })
    }
  }
  // index: (req, res, next) => {
  //   Songs.find({})
  //     .sort({ createdAt: -1 })
  //     .limit(10)
  //     .populate("author")
  //     .then(Songs => {
  //       res.render("app/index", { Songs });
  //     });
  // }
// }}
