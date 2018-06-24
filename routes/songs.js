const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songs.js');

router.post("/", songsController.requireAuth, songsController.create);
router.get('/new', songsController.requireAuth, songsController.new);
router.get('/:id', songsController.show);
router.get('/:id/edit', songsController.edit);
router.put('/:id', songsController.requireAuth, songsController.update);


module.exports = router;

