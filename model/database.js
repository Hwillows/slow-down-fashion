require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "slowDownFashion",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sqlUsers =
    "DROP TABLE if exists users; CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT, username VARCHAR(255) not null, password VARCHAR(255) not null, PRIMARY KEY (id));";
  con.query(sqlUsers, function (err, result) {
    if (err) throw err;
    console.log("Table creation `users` was successful!");

    console.log("Closing...");
  });

  let sqlWardrobe =
    "DROP TABLE if exists wardrobe; CREATE TABLE wardrobe(id INT NOT NULL AUTO_INCREMENT, user_id INT NOT NULL, clothesCategory VARCHAR(255) not null, clothesImage VARCHAR(255) not null, PRIMARY KEY (id));";
  con.query(sqlWardrobe, function (err, result) {
    if (err) throw err;
    console.log("Table creation `wardrobe` was successful!");
    console.log("Closing...");
  });

  let sqlRehome =
    "DROP TABLE if exists rehome; CREATE TABLE rehome(id INT NOT NULL AUTO_INCREMENT, user_id INT NOT NULL, clothesCategory VARCHAR(255) not null, clothesImage VARCHAR(255) not null, PRIMARY KEY (id));";
  con.query(sqlRehome, function (err, result) {
    if (err) throw err;
    console.log("Table creation `rehome` was successful!");
    console.log("Closing...");
  });

  let sqlSustainableClothing =
    "DROP TABLE if exists sustainableClothing; CREATE TABLE sustainableClothing(id INT NOT NULL AUTO_INCREMENT, companyName VARCHAR(255) not null, price VARCHAR(255) not null, url VARCHAR(255) not null, comments VARCHAR(255) not null, PRIMARY KEY (id));";
  con.query(sqlSustainableClothing, function (err, result) {
    if (err) throw err;
    console.log("Table creation `sustainableClothing` was successful!");

    console.log("Closing...");
  });

  let sqlOutfit =
    "DROP TABLE if exists outfit; CREATE TABLE outfit(id INT NOT NULL AUTO_INCREMENT, user_id INT NOT NULL, url VARCHAR(255) not null, PRIMARY KEY (id));";
  con.query(sqlOutfit, function (err, result) {
    if (err) throw err;
    console.log("Table creation `outfit` was successful!");

    console.log("Closing...");
  });

  con.end();
});
