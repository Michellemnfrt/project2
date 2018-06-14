const express = require('express')
const router = express.Router()

// const router = require('./routes/artist.js')
// const router3 = require('./routes/songs.js')
// const router4 = require('./routes/user.js')

router.get('/', (req, res) => {
    res.render('index')
})
router.get('/artist', (req, res) => {
    res.render('artist/edit')
})
router.get('/artist/new', (req, res) => {
    res.render('artist/new')
})
router.get('/songs/', (req, res) => {
    res.render('songs/edit')
})
// router.use(require('./artist'))

module.exports = router