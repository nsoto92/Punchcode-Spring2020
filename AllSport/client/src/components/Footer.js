import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

export default (props) => {
  return (
    <footer>
      <div className="container-fluid">
        <ul className="list">
          <Link className="nav-link" to="/">
            <li>ALL SPORTS</li>
          </Link>
          <Link className="nav-link" to="/aboutUs">
            <li>ABOUT US</li>
          </Link>
          <Link className="nav-link" to="/contactUs">
            <li>CONTACT US</li>
          </Link>
        </ul>
      </div>
      <div className="container text-center">
        <p className="rights">© 2020 All Sports All Rights Reserved</p>
      </div>
    </footer>
  )
}
