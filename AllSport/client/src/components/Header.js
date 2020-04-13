import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

export default (props) => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-12">
            <div className="btn-group">
              <button
                id="btn-text"
                className="btn border-red dropdown-toggle my-md-4 my-2 text-red"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Placeholder
              </button>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  Placeholder
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center">
            <Link className="nav-link" to="/">
              <h2 className="my-md-3 site-title text-white">All Sports</h2>
            </Link>
          </div>

          <div className="col-md-4 col-12 text-right">
            <p className="my-md-4 header-links">
              <a href="#" className="px-2">
                Join Us
              </a>
              <a href="#" className="px-1">
                Log In{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
