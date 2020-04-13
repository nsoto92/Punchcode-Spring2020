// Coded by Norbert M. Soto (https://github.com/nsoto92)
// Coded by Justin Burrows (https://github.com/JustinBurrowsDev)

const express = require("express")
const productRoutes = require("./routes/products")
const athleteRoutes = require("./routes/athletes")
const trendingAthRoutes = require("./routes/trendingAth")
const trendingProdRoutes = require("./routes/trendingProd")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", productRoutes)
app.use("/api", athleteRoutes)
app.use("/api", trendingAthRoutes)
app.use("/api", trendingProdRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
