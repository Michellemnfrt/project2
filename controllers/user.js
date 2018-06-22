module.exports = {
  new: (req, res, next) => {
      res.render("User/new");
     },
     show: (req, res, next) => {
      User.findOne({ _id: req.params.id })
      .populate({
        path: "songs",
        options: { limit: 5, sort: { createdAt: -1 } }
      })
      .then(user => {
        console.log(user)
        res.render("User/show", { user });
      });
    },
    login: (req, res, next) => {
      res.render("User/login", { message: req.flash("User/login") });
    },
    createLogin: (req, res, next) => {
      const login = passport.authenticate("local-login", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
      });
      return login(req, res, next);
     },
     Signup: (req, res) => {
 res.render("User/signup", { message: req.flash("user/Signup") });
     },
createSignup:(req, res, next) => {
  res.redirect(`/user/1`);
    },
  logout: (req, res, next) => {
    req.logout();
    res.redirect("/");
  }
};
