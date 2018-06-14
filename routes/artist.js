const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('im an artist')
})
    module.exports = router