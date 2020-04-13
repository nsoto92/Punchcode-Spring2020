// Coded by Justin Burrows (https://github.com/JustinBurrowsDev)

const express = require("express")
const router = express.Router()
//connection to the database file
const connection = require("../db")
//go get all of the player profiles
router.get("/players", (req, res, next) => {
  const sql = `SELECT * FROM players`
  // err - errors connecting to the database
  // results- results that your asking for
  // fields - are all the fields that your looking for
  connection.query(sql, (err, results, fields) => {
    if (err) {
      console.log(err)
    }
    //go get me the player profiles
    res.json(results)
  })
})
module.exports = router
