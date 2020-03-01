const router = require("express").Router();
const path = require("path");

router.get("/", function(req, res) {
  //res.sendfile(path.join(__dirname), "./public/index.html")
  res.sendfile("index.html");
});

router.get("/stat", function(req, res) {
  res.sendfile("stat.html");
});

router.get("/excercise", function(req, res) {
  console.log("/excerciseroute");
  res.sendfile("excercise.html");
});

module.exports = router;
