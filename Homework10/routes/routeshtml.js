var router = require("express").Router()

var path = require("path")


router.get("/notes", function(req, res){

res.sendfile(path.join(__dirname, "../public/notes.html" )) 




});


router.get("*", function(req, res){

    res.sendfile(path.join(__dirname, "../public/index.html" )) 
    
    
    
    
    });


module.exports = router