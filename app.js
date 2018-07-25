const express = require("express");
const hbs = require("hbs");
const flash = require("connect-flash");
// const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");

const app = express();

hbs.registerPartials("__dirname +/views/partials");
// hbs.registerHelper("log", function(data) {
//   let context = { ...data };
//   delete context.settings;
//   delete context.body;
//   return JSON.stringify(context);
// });
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));

require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    secret: "Express is awesome",
    resave: false,
    saveUninitialized: false
  })
);
app.use(flash());
app.use(require("./routes/index.js"));

app.set("port", process.env.PORT || 8000);
app.listen(8000, () => console.log("app is running in server"));
