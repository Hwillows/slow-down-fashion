var express = require("express");
var router = express.Router();
var db = require("../model/helper");
const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");

// get

router.get("/outfit", userShouldBeLoggedIn, async function (req, res, next) {
  const username = req.username;
  try {
    const results = await db(
      `SELECT id FROM users WHERE username="${username}";`
    );
    const user = results.data[0];
    const { data } = await db(
      `SELECT * FROM outfit WHERE user_id="${user.id}";`
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

// post

router.post("/outfit", userShouldBeLoggedIn, async function (req, res, next) {
  console.log(req.body, "is the body");
  try {
    const { url } = req.body;
    const username = req.username;

    const { data } = await db(
      `SELECT id FROM users WHERE username="${username}";`
    );
    const user = data[0];
    await db(
      `INSERT INTO outfit (user_id, url) VALUES ("${user.id}", "${url}");`
    );
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// delete
router.delete("/outfit/:id", function (req, res) {
  console.log(req.params, "is the params");
  db(`DELETE FROM outfit WHERE id=${req.params.id};`)
    .then((results) => res.send(results))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
