import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import randomUsers from "../randomUsers.json"

export default function(props) {
  return (
    <div className="cardFrame2">
      <div className="title">
        <p>List View</p>
      </div>
      <div className="peepsHead">
        <p>My Peeps</p>
      </div>
      {randomUsers.map(person => (
        <Link to={`/contact/${person.id}`}>
          <div className="cardInfo">
            <img className="thumbNail" src={person.picture.thumbnail} />
            <div className="listName">
              <p className="names">
                {person.name.first} {person.name.last}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
