var router = require("express").Router();

var db = require("../models");

router.post("/api/newworkout", function(req, res) {
  db.Workout.create({ exercises: [req.body] }).then(function(record) {
    res.json(record);
  });
});

router.get("/api/newworkout", function(req, res) {
  db.Workout.find({})
    .sort({ day: -1 })
    .limit(1)
    .then(function(record) {
      console.log("Record", record);
      res.json(record);
    });
});

router.put("/api/newworkout/:id", function(req, res) {
  var workoutid = req.params.id;
  db.Workout.findByIdAndUpdate(
    workoutid,
    { $push: { exercises: req.body } },
    { new: true }
  ).then(function(record) {
    console.log("Record", record);
    res.json(record);
  });
});

router.delete("/api/newworkout/:id", function(req, res) {
  db.Workout.findOneAndRemove({ _id: req.params.id }).then(function(record) {
    console.log("Record", record);
    res.json(record);
  });
});

module.exports = router;
