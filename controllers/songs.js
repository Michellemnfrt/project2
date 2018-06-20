module.exports = {
    show: (req, res) => {
      console.log("songs/show");
      res.render("show", { page: "songs show page" });
    },
    new: (req, res) => {
      console.log("songs/new");
      res.redirect("songs/new");
    },
    create: (req, res) => {
      console.log("songs/create");
      res.redirect("songs/1");
    },
      edit: function (req, res) {
        // rendering the form to update an existing to do 
        console.log("songs/edit");
      res.redirect("songs/edit");
      },
    update: (req, res) => {
      console.log("songs/update");
      res.redirect("songs/1");
    }
  };