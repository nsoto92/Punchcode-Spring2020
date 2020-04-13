import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Form from "./Form"
import Validateform from "./Validateform"

export default props => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Form} />
        <Route path="/validated" component={Validateform} />
      </div>
    </Router>
  )
}
