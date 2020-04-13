import React from "react"
import { Link } from "react-router-dom"
import { useInvite } from "../hooks"

export default props => {
  const { usersGoing } = useInvite()

  return (
    <>
      <div className="userContainer">
        <Link to="/">
          <p>HOME</p>
        </Link>
        <Link to="/notgoing">
          <p>NOT GOING</p>
        </Link>
      </div>
      <p>Going Count: </p>
      <div className="usersGoing">
        {usersGoing.map(user => (
          <div className="sectionContainer" key={"goingUsers-" + user.id}>
            <img className="sectionImg" src={user.img} alt="" />
            <p className="sectionName">Name: {user.name}</p>
            <p className="sectionPhone">Phone: {user.phone}</p>
            <p className="sectionEmail">Email: {user.email}</p>
          </div>
        ))}
      </div>
    </>
  )
}
