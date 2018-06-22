
module.exports = {
    show: (req, res) => {
      res.render("Songs/show", { page: "Songs show page" });
    },
    new: (req, res) => {
      console.log("/new");
      res.render("Songs/new", { page: "Songs new page" });
    },
    create: (req, res) => {
      console.log("songs/create");
      res.redirect("Songs/1");
    },
      edit: function (req, res) {
        // rendering the form to update an existing to do 
        console.log("songs/edit");
        res.render("Songs/edit", { page: "Songs edit page" });
      },
    update: (req, res) => {
      console.log("songs/update");
      res.redirect("Songs/1");
    }
  };