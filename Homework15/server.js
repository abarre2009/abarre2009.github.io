var express = require("express");
var mongoose = require("mongoose");
var port = 3000;

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(port, function() {
  console.log("listening on port ", port);
});
