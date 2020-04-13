// Coded by Norbert M. Soto (https://github.com/nsoto92)

// app.use("/api", expressjwt({ secret: config.get("secret") }))

const express = require("express")
const router = express.Router()
const sha512 = require("js-sha512")
const conn = require("../db")
const randomWord = require("../utils/randomWord")
const jwt = require("jsonwebtoken")

router.post("/register", (req, res, next) => {
  const username = req.body.username
  const salt = randomWord(20)
  const password = sha512((req.body.password = salt))

  const checkSQL =
    " SELECT count(1) as count FROM AllSport.user WHERE username = ?"

  conn.query(checkSQL, [username, password, salt], (err, results, fields) => {
    if (results[0].count > 0) {
      res.status(409).json({
        message: "User Exists.",
      })
    } else {
      const sql = `
      INSERT into AllSport.user (username, password, salt)
      VALUES (?, ?, ?)
      `

      conn.query(sql, [username, password, salt], (err1, results1, fields1) => {
        res.json({
          message: "User added succesfully",
        })
      })
    }
  })
})

router.post("/login"),
  (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    const getSQL = `SELECT username, password, salt FROM AllSport.user WHERE username = ?`

    conn.query(getSQL, [username], (salterr, saltresults, saltfields) => {
      if (saltresults.length > 0) {
        const salt = saltresults[0].salt
        const userpass = saltresults[0].password

        if (sha512(password + salt) === userpass) {
          const token = jwt.sign(
            { username: username, project: AllSport },
            config.get("secret")
          )

          res.json({
            token: token,
          })
        } else {
          res.status(401).json({
            message: "Invalid user/password",
          })
        }
      } else {
        res.status(401).json({
          message: "Invalid user/password",
        })
      }
    })
  }

module.exports = router
