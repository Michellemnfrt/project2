const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('im at the songs page')
})
    module.exports = router