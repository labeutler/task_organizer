//const path for routes in server.js
const path = require('path');
const router = require('express').Router();

//Calling notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//Calling index.html
router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;