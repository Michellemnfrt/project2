const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('im an artist')
})
router.get('/artist', (req, res) => {
    res.render('artist/index')
})
    router.get('/artist/new', (req, res) => {
        res.render('artist/new')
    })
    router.get('/artist/edit', (req, res) => {
        res.render('artist/edit')
    })
router.get('/artist/show', (req, res) => {
    res.render('artist/show')

})
    /* module.exports = router */