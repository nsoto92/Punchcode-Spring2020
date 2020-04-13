import React from "react"
import SliderOne from "./SliderOne"
import TrendingPros from "./TrendingPros"
import Featured from "./Featured"
import SaleVideo from "./SaleVideo"
import Lastest from "./Lastest"
import SportsLogos from "./SportsLogos"
import "../styles/home.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default (props) => {
  return (
    <div>
      <SliderOne />
      <TrendingPros />
      <Featured />
      <SaleVideo />
      <Lastest />
      <SportsLogos />
    </div>
  )
}
