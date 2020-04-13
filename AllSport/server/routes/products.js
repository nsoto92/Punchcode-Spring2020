// Coded by Norbert M. Soto (https://github.com/nsoto92)

const express = require("express")
const router = express.Router()
const conn = require("../db")

router.get("/products", (req, res, next) => {
  const sql = `SELECT * FROM AllSport.products`

  conn.query(sql, (err, results, fields) => {
    if (err) {
      console.log(err)
    }
    res.json(results)
  })
})

router.post("/products", (req, res, next) => {
  const title = req.body.title
  const price = req.body.price
  const image = req.body.image

  const checkSQL =
    " SELECT count(1) as count FROM AllSport.products WHERE title = ?"

  conn.query(checkSQL, [title, image, price], (err, results, fields) => {
    if (results[0].count > 0) {
      res.status(409).json({
        message: "Product Exists.",
      })
    } else {
      const sql = `
      INSERT into AllSport.products (title, image, price)
      VALUES (?, ?, ?)
      `

      conn.query(sql, [title, image, price], (err1, results1, fields1) => {
        res.json({
          message: "Product succesfully added",
        })
      })
    }
  })
})

module.exports = router
