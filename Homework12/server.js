var express = require("express");
var expresshandles = require("express-handlebars");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.engine(
  "handlebars",
  expresshandles({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(require("./controllers/burgers_controller"));

app.listen(port, () => console.log("applistening", port));
