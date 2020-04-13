import React from "react"
import { Link } from "react-router-dom"
import { useInvite } from "../hooks"

export default props => {
  const { usersNotGoing } = useInvite()

  return (
    <div>
      <div className="userContainer">
        <Link to="/">
          <p>HOME</p>
        </Link>
        <Link to="/going">
          <p>GOING</p>
        </Link>
      </div>
      <p>Not Going Count: </p>
      <div className="usersGoing">
        {usersNotGoing.map(user => (
          <div key={"goingUsers-" + user.id}>
            <img className="sectionImg" src={user.img} alt="" />
            <p className="sectionName">Name: {user.name}</p>
            <p className="sectionPhone">Phone: {user.phone}</p>
            <p className="sectionEmail">Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
