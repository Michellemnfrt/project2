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
          // console.log("comments are equL TO " + comments);
          song.comments = comments;
          // console.log("the showpage is equal to " + song);
          res.render("song/show", song);
        });
      });
  },
  new: (req, res) => {
    res.render("song/new");
  },
  create: (req, res) => {
    console.log(req);
    Song.create({
      content: req.body.song.content,
      author: req.user._id
    }).then(song => {
      req.user.songs.push(song);
      // console.log(req.user.songs);
      req.user.save(err => {
        res.redirect(`song/${song._id}`);
      });
    });
  },
  newComment: (req, res) => {
    // console.log("newcomment test");
    Comment.create({
      content: req.body.content,
      author: req.user._id
    }).then(comment => {
      // console.log("the comment is equal to" + comment);
      // console.log("the req is equal to " + req);
      // console.log("req.params.id is equal to " + req.params.id);

      comment.save(err => {
        res.redirect(`/song/${req.params.id}`);
      });
    });
  },

  // edit: function(req, res) {
  //   // rendering the form to update an existing to do
  //   console.log("/update");
  //   res.redirect(`song/${song._id}`);
  // },
  edit: function(req, res) {
    // rendering the form to update an existing to do
    console.log("song/edit");
    res.render("Song/edit", { page: "Songs edit page" });
  },

  update: (req, res) => {
    let { content } = req.body;
    Song.findOne({ _id: req.params.id }).then(song => {
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
