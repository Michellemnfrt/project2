const express = require('express');

const hbs = require('hbs');
const app = express();

const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser =require('body-parser');
const session = require("express-session");
const passport = require('passport');
const methodOverride = require("method-override");
app.use(express.static("/public"));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.set('view engine', 'hbs');
app.use(methodOverride("method-override"));


app.use(session({secret: 'EXPRESS-IS-AWESOME',
saveUninitialized: true,
resave: false
    })
  );

app.use(flash())

require("./config/passport")(passport);
app.use(passport.initialize())
app.use(passport.session())

app.get("/", (req, res) => {
    res.render("index", { page: "homepage" });
 });
app.use(require("./routes/index.js"));

app.set('port', process.env.PORT || 8000);

app.listen(8000, () => console.log('app is running in server'));