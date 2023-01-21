//const a route to read and save notes in per README
const router = require('express').Router();
const store = require('../db/store');

//route to Get the notes from store
router.get('/', (req, res) => {
    notesFrom('./db/store.js').then((data) =>
        res.json(JSON.parse(data))
    );
});