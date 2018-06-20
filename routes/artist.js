const express = require('express')
const router = express.Router()
const artistController = require('../controllers/artist.js')

router.get('/', artistController.index);
router.use('/new', artistController.new);
router.use('/:id', artistController.show);
router.use('/:id/edit', artistController.edit);
// router.put('/:id', artistController.update);

module.exports = router;