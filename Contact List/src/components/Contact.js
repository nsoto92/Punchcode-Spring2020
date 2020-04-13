import React, { useEffect } from "react"
import randomUsers from "../randomUsers.json"
import { FaUserAlt } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { MdPhoneIphone } from "react-icons/md"
import { FaGlobeAsia } from "react-icons/fa"

export default function(props) {
  const id = props.match.params.id

  const person = randomUsers.find(contactId => contactId.id == id)

  return (
    <div className="cardFrame">
      <div className="title">
        <p>Single View</p>
      </div>
      <div className="imgBg">
        <button className="backBtn">
          <a href="http://localhost:3002/">
            <FaArrowLeft />
          </a>
        </button>
        <img className="contactPic" src={person.picture.large} />
      </div>
      <div className="cardInfo">
        <FaUserAlt />
        <p>
          {person.name.first} {person.name.last}
        </p>
      </div>
      <div className="cardInfomd">
        <MdMail />
        <p> {person.email} </p>
      </div>
      <div className="cardInfo">
        <MdPhoneIphone />
        <p> {person.phone} </p>
      </div>
      <div className="cardInfo">
        <FaGlobeAsia />
        <p>
          {person.location.city}, {person.location.state}
        </p>
      </div>
    </div>
  )
}
