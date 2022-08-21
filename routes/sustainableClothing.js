var express = require("express");
var res = require("express/lib/response");
var router = express.Router();
var db = require("../model/helper");

// select all sustainable clothing suggestions

router.get("/sustainableClothing", function (req, res, next) {
  db(`SELECT * FROM sustainableClothing;`)
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

router.post("/sustainableClothing", function (req, res, next) {
  console.log(req.body, "is the body");
  db(
    `INSERT INTO sustainableClothing (companyName, price, url, comments) VALUES ("${req.body.companyName}", "${req.body.price}", "${req.body.url}", "${req.body.comments}");`
  )
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err.message));
});

router.delete("/sustainableClothing/:id", function (req, res) {
  console.log(req.params, "is the params");
  db(`DELETE FROM sustainableClothing WHERE id=${req.params.id};`)
    .then((results) => res.send(results))
    .catch((err) => res.status(500).send(err));
});
module.exports = router;
