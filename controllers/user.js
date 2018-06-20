const user = require("../models/User");
const passport = require("passport");

module.exports = {
    show: (req, res) => {
      user.findOne({ _id: req.params.id })
      .populate({
        path: "songs",
        options: { limit: 5, sort: { createdAt: -1 } }
      })
      .then(user => {
        res.render("user/show", { user });
      });
    },
    login: (req, res) => {
      res.render("user/login", { message: req.flash("signupMessage") });
    },
    createLogin: (req, res) => {
      const login = passport.authenticate("local-login", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
      });
      return login(req, res);
     },
  signup: (req, res) => {
    res.render("user/signup", { message: req.flash("signupMessage") });
  //   const signup = passport.authenticate("local-signup", {
  //     successRedirect: "/",
  //     failureRedirect: "/signup",
  //     failureFlash: true
  //   });
  //   return signup(req, res);
   },
  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  }
};

   
  
   