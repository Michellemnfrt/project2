const express = require('express');
const hbs = require("hbs");
const app = express();

const bodyParser =require('body-parser');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs"); 

app.get("/", (req, res) => {
    res.render("index", { page: "homepage" });
});

app.use(require("./routes/index.js"));

app.set('port', process.env.PORT || 8000) 
app.listen(8000, () => console.log('app is running in server'))
