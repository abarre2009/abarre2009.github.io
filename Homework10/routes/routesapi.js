var router = require("express").Router();
var notes = require("../db/store");

router.get("/notes", function(req, res) {
  notes
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json(err));
});
router.post("/notes", function(req, res) {
  notes
    .addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json(err));
});
router.delete("/notes/:id", function(req, res) {
  notes
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
