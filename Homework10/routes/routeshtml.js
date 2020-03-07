var router = require("express").Router();

var path = require("path");

router.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/index", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
