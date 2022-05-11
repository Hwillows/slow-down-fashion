var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", function (req, res, next) {
  res.send("You are an index");
});

/* GET home page.*/
router.get("/wardrobe", function (req, res, next) {
  db(`SELECT * FROM wardrobe;`)
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

router.get("/wardrobe/:id", function (req, res) {
  db(`SELECT * FROM students id=${req.params.id};
  `)
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

router.post("/wardrobe", function (req, res) {
  // db(
  //   `INSERT INTO wardrobe (id,  clothesCatagory, clothesImage) VALUES (“${req.body.id}", “${req.body.clothesCatagory}”, “${req.body.clothesImage}”);`
  // )
  //   .then((results) => res.send(results.data))
  //   .catch((err) => res.status(500).send(err));
  console.log(req.file);
});

router.delete("/api/wardrobe/:id", function (req, res) {
  db(`DELETE FROM students WHERE id=$
  {req.params.id};`)
    .then((results) => res.send(results))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
