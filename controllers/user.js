const User = require("../models/user");
const { songs } = require("../models/songs");
const passport = require("passport");

module.exports = {
    show: (req, res) => {
      User.findOne({ _id: req.params.id })
      .populate({
        path: "songs",
        options: { limit: 5, sort: { createdAt: -1 } }
      })
      .then(user => {
        res.render("user/show", { user });
      });
  },
      // res.render("index", { page: "user show page" });
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
  },
  signUp: (req, res) => {
    const signup = passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/signup",
      failureFlash: true
    });

    return signup(req, res);
  },
  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  }
};

/*     new: (req, res) => {
      console.log("user/new");
      res.render("index", { page: "user new page" });
    },
    create: (req, res) => {
      console.log("user/create");
      res.redirect(`/user/1`);
    }
  };
   */