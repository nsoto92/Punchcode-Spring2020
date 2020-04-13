// Coded by Norbert M. Soto (https://github.com/nsoto92)
// Coded by Justin Burrows (https://github.com/JustinBurrowsDev)

const express = require("express")
const router = express.Router()

const connection = require("../db")

router.get("/featplayers", (req, res, next) => {
  const sql = `SELECT * FROM AllSport.players
  ORDER BY RAND()
  LIMIT 6`

  connection.query(sql, (err, results, fields) => {
    if (err) {
      console.log(err)
    }

    res.json(results)
  })
})
module.exports = router
