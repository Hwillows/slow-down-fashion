var express = require("express");
var router = express.Router();
var db = require("../model/helper");
const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");

router.get("/", function (req, res, next) {
  res.send("You are an index");
});

router.get("/wardrobe", userShouldBeLoggedIn, async function (req, res, next) {
  try {
    const results = await db(`SELECT * FROM wardrobe;`);
    res.status(200).send(results.data);
    console.log(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/wardrobe/:id", userShouldBeLoggedIn, function (req, res, next) {
  console.log(req.params.id, " get id ");

  db(`SELECT * FROM wardrobe WHERE id=${req.params.id};`)
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

router.get(
  "/wardrobe/item/:clothesCategory",
  userShouldBeLoggedIn,
  function (req, res, next) {
    console.log("i am here");
    db(
      `SELECT * FROM wardrobe WHERE clothesCategory="${req.params.clothesCategory}";`
    )
      .then((results) => {
        console.log(results);
        res.send(results.data);
      })
      .catch((err) => res.status(500).send(err));
  }
);

router.post("/wardrobe", userShouldBeLoggedIn, async function (req, res, next) {
  console.log(req.body, "is the body");
  try {
    const { clothesCategory, clothesImage } = req.body;
    const username = req.username;

    const { data } = await db(
      `SELECT id FROM users WHERE username="${username}";`
    );
    const user = data[0];
    await db(
      `INSERT INTO wardrobe (user_id, clothesCategory, clothesImage) VALUES ("${user.id}", "${clothesCategory}", "${clothesImage}");`
    );
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/wardrobe/:id", userShouldBeLoggedIn, function (req, res) {
  console.log(req.params, "is the params");
  db(`DELETE FROM wardrobe WHERE id=${req.params.id};`)
    .then((results) => res.send(results))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
