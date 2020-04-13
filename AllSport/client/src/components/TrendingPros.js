import React from "react"
import { Link } from "react-router-dom"
import { useFeatPlayers } from "../hooks"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

export default (props) => {
  const { players } = useFeatPlayers()
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <div className="features">
          <h1>Trending Pros</h1>
        </div>
      </div>
      <div className="site-slider-two px-md-4">
        <div className="row slider-two text-center">
          {players.map((player) => (
            <div className="col-md-2 product pt-md-5 pt-4">
              <img className="homePros" src={player.img} alt="Product 1" />
              <Link className="linkToShop" to="/players">
                <span className="border site-btn btn-span">
                  {player.firstname + " " + player.lastname}
                </span>
              </Link>
            </div>
          ))}
        </div>
        <div className="slider-btn">
          <span className="prev position-top">
            <i className="fas fa-chevron-left fa-2x text-secondary"></i>
          </span>
          <span className="next position-top right-0">
            <i className="fas fa-chevron-right fa-2x text-secondary"></i>
          </span>
        </div>
      </div>
    </div>
  )
}
