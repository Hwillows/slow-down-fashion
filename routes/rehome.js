var express = require("express");
var router = express.Router();
var db = require("../model/helper");
const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");

router.get("/", function (req, res, next) {
  res.send("You are an index");
});

router.get("/rehome", userShouldBeLoggedIn, async function (req, res, next) {
  const username = req.username;
  try {
    const results = await db(
      `SELECT id FROM users WHERE username="${username}";`
    );
    const user = results.data[0];
    const { data } = await db(
      `SELECT * FROM rehome WHERE user_id="${user.id}";`
    );
    if (data.length) {
      res.status(200).send(data);
    } else {
      res.status(404).send("Could not retrieve clothes items");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/rehome", userShouldBeLoggedIn, async function (req, res, next) {
  console.log(req.body, "is the body");
  try {
    const { clothesCategory, clothesImage } = req.body;
    const username = req.username;

    const { data } = await db(
      `SELECT id FROM users WHERE username="${username}";`
    );
    const user = data[0];
    await db(
      `INSERT INTO rehome (user_id, clothesCategory, clothesImage) VALUES ("${user.id}", "${clothesCategory}", "${clothesImage}");`
    );
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/rehome/:id", function (req, res) {
  console.log(req.params, "is the params");
  db(`DELETE FROM rehome WHERE id=${req.params.id};`)
    .then((results) => res.send(results))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
