// Coded by Norbert M. Soto (https://github.com/nsoto92)
// Coded by Justin Burrows (https://github.com/JustinBurrowsDev)

const mysql = require("mysql2")
const config = require("config")

const db = mysql.createPool({
  // how many people are allowed to connect
  connectionLimit: 10,
  // host is the database that you are connecting to
  host: config.get("db.host"),
  // never do this on a actually project, learning purpose only (no password)
  user: config.get("db.user"),
  password: config.get("db.password"),
  database: config.get("db.database"),
  port: config.get("db.port"),
})

module.exports = db
