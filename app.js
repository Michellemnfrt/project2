const express = require('express');
// const hbs = require('hbs');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser =require('body-parser');
const session = require("express-session");
const passport = require('passport');
const methodOverride = require("method-override");

const app = express();
require("./config/passport")(passport);
app.use(express.static("public"));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs'); 
app.use(methodOverride('_method'));
app.use(
    session({
      secret: "EXPRESS-IS-AWESOME",
      saveUninitialized: true,
      resave: false
    })
  );

// app.get("/", (req, res) => {
//     res.render("index", { page: "homepage" });
// });


app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(require("./routes/index.js"));

app.set('port', process.env.PORT || 8000) 
app.listen(8000, () => console.log('app is running in server'))
