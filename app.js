const express = require('express');
const hbs = require("hbs");
const app = express();
const bodyParser =require('body-parser');
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const router = require('./routes/index.js');

require("./config/passport")(passport);
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "EXPRESS-IS-AWESOME",
    saveUninitialized: true,
    resave: false
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use(require("./routes/index.js"));

app.set('port', process.env.PORT || 3000) 
app.listen(3000, () => console.log('app is running in server'));

