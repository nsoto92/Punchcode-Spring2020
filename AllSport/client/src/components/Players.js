// Coded by Justin Burrows (https://github.com/JustinBurrowsDev)
import React, { useState } from "react"
import ReactDOM from "react-dom"
import ReactCardFlip from "react-card-flip"
import { Link } from "react-router-dom"
import Card from "./Card.js"

import { usePlayers } from "../hooks"
import styles from "../styles/players.css"

export default (props) => {
  const [message, setMessage] = useState("")
  const { players } = usePlayers()

  return (
    <div>
      <div className="title">
        <h1>PLAYER CARDS</h1>
      </div>
      <div className="cards">
        {players.map((player) => (
          <Card player={player} />
        ))}
      </div>
    </div>
  )
}
