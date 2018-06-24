const Songs = require("../models/Songs");
module.exports = {
    show: (req, res, next) => {
      Songs.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, songs) {
        Comment.populate(songs.comments, { path: "author" }, function(
          err,
          comments
        ) {
          songs.comments = comments;
          console.log(songs);
      res.render("Songs/show", Songs);
        });
      });
    },
    new: (req, res, next) => {
      console.log("/new");
      res.render("Songs/new", Songs);
    },
    create: (req, res, next) => {
      Songs.create({
        content: req.body.songs.content,
        author: req.user._id
      }).then(songs => {
        req.user.songs.push(songs);
        req.user.save(err => {
          res.redirect(`/Songs/${songs._id}`);
        });
      });
    },
    update: (req, res) => {
      let { content } = req.body;
      Songs.findOne({ _id: req.params.id }).then(songs => {
        songs.comments.push({
          content,
          author: req.user._id
        });
        songs.save(err => {
          res.redirect(`/Songs/${songs._id}`);
        });
      });
    },
    edit: function (req, res, next) {
      // rendering the form to update an existing to do 
      console.log("songs/edit");
      res.render("Songs/edit", { page: "Songs edit page" });
    },
    requireAuth: function(req, res, next) {
      if (req.isAuthenticated()) {
        next();
      } else {
        res.redirect("/");
      }
    }
  };