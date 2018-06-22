const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');

router.get('/login', userController.login);
router.post('/login', userController.createLogin);
router.get('/Signup', userController.Signup);
router.post('/', userController.createSignup);
router.post('/show/:id', userController.show);
router.get('/logout', userController.logout);


module.exports = router;
