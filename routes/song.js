const express = require("express");
const router = express.Router();
const songController = require("../controllers/song.js");

router.post("/", songController.requireAuth, songController.create);
router.get("/new", songController.requireAuth, songController.new);
router.get("/:id", songController.show);
router.put("/:id", songController.requireAuth, songController.update);
router.delete("/:id", songController.requireAuth, songController.delete);
module.exports = router;
