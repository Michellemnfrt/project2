const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('im an artist')
})
router.get('/songs', (req, res) => {
    res.render('songs/index')
})
    router.get('/songs/new', (req, res) => {
        res.render('songs/new')
    })
    router.get('/songs/edit', (req, res) => {
        res.render('songs/edit')
    })
router.get('/songs/show', (req, res) => {
    res.render('songs/show')

})