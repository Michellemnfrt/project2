const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songs.js');

router.get('/new', songsController.new);
router.get('/:id', songsController.show);
router.get('/:id/edit', songsController.edit);
router.put('/:id', songsController.update);


module.exports = router;

