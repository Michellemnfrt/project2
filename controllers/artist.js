const Artist = require("../models/Artist");
module.exports = {
	index: function (req, res) {
		console.log("/");
      res.render("Artist/", { page: "artist show page" })
		// listing all to dos
	},
	new: function (req, res) {
		// rending the form to create a new to do
		console.log("artist/new");
		res.render("Artist/new", { page: "upload a new artist" });
	  },
	create: function (req, res) {	
		// creating a new to do and saving it to the database
		console.log("artist/create");
		res.redirect("Artist/1");
	},
	show: function (req, res) {
		// displaying the data for a single to do
		console.log("artist/edit");
		res.render("Artist/show", { page: "show artist" });
	},
	edit: function (req, res) {
		// rendering the form to update an existing to do 
	    console.log("artist/update");
      res.redirect("Artist/edit");
	},
	 update: function (req, res) {
		console.log("artist/update");
      res.redirect("Artist");
	},
	// 	// updating a to do in the database
	
	// destroy: function (req, res) {
	// 	// deleting a to do
	// }
};