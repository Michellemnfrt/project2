const express = require('express')
const router = express.Router()
const songsController = require('../controllers/songs.js')
router.use('/new', songsController.new)
router.use('/:id', songsController.show)
router.use('/:id/edit', songsController.edit)
// router.put('/:id', songsController.update)


module.exports = router 

