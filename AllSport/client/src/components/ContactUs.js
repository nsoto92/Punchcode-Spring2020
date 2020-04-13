import React from "react"
import "../styles/contact.css"

export default (props) => {
  return (
    <div className="container-fluid contactWrapper">
      <div className="container text-center">
        <div className="features">
          <h1>Contact Us</h1>
        </div>
      </div>
      <form id="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary contact-button">
          Submit
        </button>
      </form>
    </div>
  )
}
