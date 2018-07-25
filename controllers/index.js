const Songs = require("../models/Songs");

module.exports = {
  index: (req, res) => {
    Songs.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("author")
      .then(Songs => {
        res.render("Songs/index", { Songs });
      });
  }
};
