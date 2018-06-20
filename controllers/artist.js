module.exports = {
	index: function (req, res) {
		console.log("artist/show");
      res.render("index", { page: "artist show page" })
		// listing all to dos
	},
	new: function (req, res) {
		// rending the form to create a new to do
		console.log("artist/new");
		res.render("app", { page: "upload a new artist" });
	  },
	create: function (req, res) {	
		// creating a new to do and saving it to the database
		console.log("artist/create");
		res.redirect("artist/1");
	},
	show: function (req, res) {
		// displaying the data for a single to do
		console.log("artist/edit");
		res.redirect("artist/edit");
	},
	edit: function (req, res) {
		// rendering the form to update an existing to do 
	    console.log("artist/update");
      res.redirect("artist/1");
	},
	// update: function (req, res) {
	// 	// updating a to do in the database
	// },
	// destroy: function (req, res) {
	// 	// deleting a to do
	// }
}