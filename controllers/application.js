const { Song } = require("../models/Song");

module.exports = {
  index: (req, res) => {
    Song.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("author")
      .then(songs => {
        res.render("partials/index", { songs });
      });
  }
};
