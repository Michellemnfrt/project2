const express = require('express');
const hbs = require("hbs");
const app = express();

const bodyParser =require('body-parser');
const router = require('./routes/index.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { page: "homepage" });
});

app.use(router);

app.set('port', process.env.PORT || 3000) 
app.listen(3000, () => console.log('app is running in server'));

