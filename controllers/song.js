const { Song, Comment } = require("../models/Song");

module.exports = {
  show: (req, res) => {
    Song.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, song) {
        Comment.populate(song.comments, { path: "author" }, function(
          err,
          comments
        ) {
          song.comments = comments;
          console.log(song);
          res.render("song/show", song);
        });
      });
  },
  new: (req, res) => {
    // User.find({}).then(users => {
    //   console.log("/new");
    res.render("song/new");
    //   { users });
    // });
  },
  create: (req, res) => {
    Song.create({
      content: req.body.song.content,
      author: req.user._id
    }).then(song => {
      user.songs.push(song);
      user.save(err => {
        res.redirect(`song/${song._id}`);
      });
    });
  },
  update: (req, res) => {
    let { content, author } = req.body;
    Song.findOne({ _id: req.body.id }).then(song => {
      song.comments.push({
        content,
        author: req.user._id
      });
      song.save(err => {
        res.redirect(`/song/${song._id}`);
      });
    });
  },
  delete: (req, res) => {
    Song.findOneAndRemove({ _id: req.params.id }).then(song => {
      res.redirect("/");
    });
  },
  requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }
  }
};

// edit: function(req, res, next) {
//   // rendering the form to update an existing to do
//   console.log("songs/edit");
//   res.render("Songs/edit", { page: "Songs edit page" });
// },
//   requireAuth: function(req, res, next) {
//     if (req.isAuthenticated()) {
//       next();
//     } else {
//       res.redirect("/");
//     }
//   }
// };

// module.exports = {
//   show: function(req, res, next) {
//     console.log("song/show");
//     res.render("index", { page: "song show page" });
//   },
//   new: function(req, res, next) {
//     console.log("song/new");
//     res.render("index", { page: "create a new song" });
//   },
//   create: function(req, res, next) {
//     console.log("song/create");
//     res.redirect("song/1");
//   },
//   update: function(req, res, next) {
//     console.log("song/update");
//     res.redirect("song/1");
//   }
// };
