const express = require("express");
const router = express.Router();
const songsController = require("../controllers/songs.js");

router.post("/", songsController.create);
router.get("/new", songsController.new);
router.get("/:id", songsController.show);
router.put("/:id", songsController.update);

module.exports = router;
