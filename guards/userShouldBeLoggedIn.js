const jwt = require("jsonwebtoken");
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;

function userShouldBeLoggedIn(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, supersecret, (err, decoded) => {
    if (err) return res.sensStatus(401);
    req.username = decoded;
    next();
  });
}

module.exports = userShouldBeLoggedIn;
