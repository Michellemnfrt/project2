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
        res.render("User/show", { user });
      });
    },
    login: (req, res) => {
      res.render("User/login", { message: req.flash("signupMessage") });
    },
    createLogin: (req, res) => {
      const login = passport.authenticate("local-login", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
      });
      return login(req, res);
     },
  Signup: (req, res) => {
    res.render("User/signup", { user } );
  },
  createSignup: (req, res) => {
    const signup = passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/Signup",
      failureFlash: true
    });
    return Signup(req, res);
  },
  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  }
};

   
  