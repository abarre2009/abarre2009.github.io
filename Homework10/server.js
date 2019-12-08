var express = require ("express")
var app = express()
var port = 3000
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static("public"));
app.use(require("./routes/routeshtml"));
app.listen (port, ()=>console.log("applistening", port ));

