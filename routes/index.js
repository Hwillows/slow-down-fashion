var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
const db = require("../model/helper");

router.get("/", function (req, res, next) {
  res.send("You are an index");
});

/* GET home page.*/
router.get("/wardrobe", function (req, res) {
  db(`SELECT * FROM wardrobe;`)
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

router.get("/wardrobe/:id", function (req, res, next) {
  db(`SELECT * FROM wardrobe id=${req.params.id};
  `)
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

// router.get("/wardrobe/:clothesCategory", function (req, res) {
//   db(
//     `SELECT clothesImage FROM wardrobe WHERE clothesCatagory=${req.params.clothesCategory};`
//   )
//     .then((results) => res.send(results.data))
//     .catch((err) => res.status(500).send(err));
// });

router.post("/wardrobe", (req, res) => {
  console.log(req, "is the body");
  // `INSERT INTO items (text, complete) VALUES ("${req.body.text}", "${req.body.complete}");`
  db(
    `INSERT INTO wardrobe (clothesCategory, clothesImage) VALUES ("${req.body.clothesCategory}", "${req.body.clothesImage}");`
  )
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err.message));
});

router.delete("/wardrobe/:id", function (req, res) {
  console.log(req.params, "is the params");
  db(`DELETE FROM wardrobe WHERE id=${req.params.id};`)
    .then((results) => res.send(results))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
