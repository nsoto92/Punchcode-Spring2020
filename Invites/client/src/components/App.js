import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import User from "./User"
import Going from "./Going"
import Notgoing from "./NotGoing"

export default props => {
  return (
    <Router>
      <Route exact path="/" component={User} />
      <Route path="/going" component={Going} />
      <Route path="/notgoing" component={Notgoing} />
    </Router>
  )
}
