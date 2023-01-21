//const a route to read and save notes in per README
const router = require('express').Router();
const store = require('../db/store');

//route to Get the notes from store
router.get('/notes', (req, res) => {
    store
        .getNotes().then((notes) => {
            return res.json(notes);
        });
});

//post notes once received
router.post('/notes', (req, res) => {
    store
        .addNote(req.body).then((notes) => res.json(notes));
});

//to be able to delete a note
router.delete('/notes', (req, res) => {
    store
        .deleteNote(req.params.id).then(() => res.json({ ok: true }));
});

module.exports = router;