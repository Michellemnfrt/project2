const express = require('express')
const router = express.Router()

// const router = require('./routes/artist.js')
// const router3 = require('./routes/songs.js')
// const router4 = require('./routes/user.js')
const applicationController = require('../controllers/index.js');

router.get('/', applicationController.index);

module.exports = router;

router.get('/', (req, res) => {
    res.render('index')
})
router.get('/user', (req, res) => {
    res.render('user/index')
})
router.get('/artist/', (req, res) => {
    res.render('artist/index')
})
router.get('/songs/', (req, res) => {
    res.render('songs/index')
})
// router.use(require('./artist'))

module.exports = router