module.exports = {
    show: (req, res) => {
      console.log("songs/show");
      res.render("index", { page: "songs show page" });
    },
    new: (req, res) => {
      console.log("songs/new");
      res.render("index", { page: "upload a new song" });
    },
    create: (req, res) => {
      console.log("playlist/create");
      res.redirect("songs/1");
    },
    update: (req, res) => {
      console.log("songs/update");
      res.redirect("songs/1");
    }
  };