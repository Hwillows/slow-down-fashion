var express = require("express");
var router = express.Router();
let jwt = require("jsonwebtoken");
let userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
let db = require("../model/helper");
require("dotenv").config();
let bcrypt = require("bcrypt");
const saltRounds = 10;
const supersecret = process.env.SUPER_SECRET;
router.use(express.json());

/* GET users listing. */
router.get("/all", function (req, res, next) {
  db(`SELECT * FROM users;`)
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

router.get("/:id", userShouldBeLoggedIn, async function (req, res, next) {
  try {
    const { data } = await db(`SELECT * FROM users WHERE id=${req.params.id};`);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/register", async function (req, res, next) {
  const { username, password } = req.body;
  try {
    // check if user exists
    let { data } = await db(`SELECT username FROM users;`);
    let userExists = data.find((user) => user.username === username);
    if (userExists) res.sendStatus(401);
    // if username is availble, create hashed password
    if (userExists === undefined) {
      const hash = await bcrypt.hash(password, saltRounds);
      await db(
        `INSERT INTO users (username, password) VALUES ("${username}", "${hash}")`
      );
      res.status(200).send("user added");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// router.post("/login", async function (res, req, next) {
//   const { username, password } = req.body;

//   try {
//     const results = await db(
//       `SELECT * from users WHERE username = "${username}";`
//     );
//     const user = results.data[0];
//     if (user) {
//       const user_id = user.id;
//       const correctPassword = await bcrypt.compare(password, user.password);
//       if (!correctPassword) return res.sendStatus(401);
//       var token = jwt.sign({ user_id }, supersecret);
//       res.send({ message: "Login successful, here is yout token", token });
//     } else {res.send(token);
//     } res.status(400).send({ message: err.message });
//   }
// });

//login, receive jwt
router.post("/login", async function (req, res, next) {
  const { username, password } = req.body;
  try {
    //select user info from users table
    const results = await db(
      `SELECT * FROM users WHERE username="${username}";`
    );
    const user = results.data[0];

    //if user exists
    if (user) {
      //compare input password with stored hashed password
      const correctPassword = await bcrypt.compare(password, user.password);

      //return error if password incorrect
      if (!correctPassword) return res.sendStatus(401);

      //send back token
      var token = jwt.sign(username, supersecret);
      res.send(token);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/profile", userShouldBeLoggedIn, (req, res) => {
  res.send({
    message: "Here is PROTECTED data for the user " + req.user_id,
  });
});

module.exports = router;
