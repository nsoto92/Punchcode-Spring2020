// Coded by Norbert M. Soto (https://github.com/nsoto92)

const express = require("express")
const router = express.Router()
const connection = require("../db")

router.get("/featproducts", (req, res, next) => {
  const sql = `SELECT * FROM AllSport.featuredproducts
  ORDER BY RAND()`


  connection.query(sql, (err, results, fields) => {
    if (err) {
      console.log(err)
    }
    res.json(results)
  })
})
module.exports = router
