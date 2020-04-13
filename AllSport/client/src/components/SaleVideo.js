import React from "react"
import ReactPlayer from "react-player"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

export default (props) => {
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <div className="features">
          <h1 className="saleHeader">SUPER SALE: YOU CAN HAVE IT ALL</h1>
        </div>
      </div>

      <div className="player-wrapper center">
        <ReactPlayer
          url="https://youtu.be/p3WFMrG91FcU"
          playing
          className="react-player"
          playing
          width="95%"
          height="90%"
        />
      </div>
    </div>
  )
}
