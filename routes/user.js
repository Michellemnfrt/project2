const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.js");
router.get('/login', userController.login);
router.post('/login', userController.createLogin);
router.get('/sign-up', userController.signUp);
router.post('/new', userController.new);
router.get('/logout', userController.logout);
router.get('/:id', userController.show);

module.exports = router;

/* router.get('/user', (req, res) => {
    res.render('user/index')
})
    router.get('/user/new', (req, res) => {
        res.render('user/new')
    })
    router.get('/user/edit', (req, res) => {
        res.render('user/edit')
    })
router.get('/user/show', (req, res) => {
    res.render('user/show') 

}) */