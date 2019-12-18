var router = require("express").Router()
var burger = require("../models/burger")



router.get("/", function (req, res) {
    burger.all(function (data) {
        res.render("index", {

            burger: data


        });
    });
});


router.post("/burger/create", function (req, res) {
    burger.create(req.body.burger_name, function (data) {
        res.redirect("/")
    });
})


router.put("/burger/:id", function (req, res) {
    burger.update(req.params.id, function (data) {
        res.redirect("/")
    });
})




module.exports = router