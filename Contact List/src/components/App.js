import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Contact from "./Contact"
import List from "./List"
import randomUsers from "../randomUsers.json"

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={List} />
        <Route exact path="/contact/:id" component={Contact} />
      </div>
    </Router>
  )
}
