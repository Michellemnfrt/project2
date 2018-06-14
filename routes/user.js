const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('im an artist')
})
router.get('/user', (req, res) => {
    res.render('artist/index')
})
    router.get('/user/new', (req, res) => {
        res.render('user/new')
    })
    router.get('/user/edit', (req, res) => {
        res.render('user/edit')
    })
router.get('/user/show', (req, res) => {
    res.render('user/show')

})