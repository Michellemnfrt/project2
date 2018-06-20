const express = require('express')
const router = express.Router()

const applicationController = require('../controllers/index.js');

router.get('/', applicationController.index);
router.use('/artist', require('./artist'))
router.use('/songs', require('./songs'))
router.use('/user', require('./user'))

module.exports = router;
