import React, { useState } from "react"
import store from "../redux/store"
import { Provider } from "react-redux"
import Items from "./Items"
import Form from "./Form"

export default props => {
  return (
    <Provider store={store}>
      <div>
        <Form />
        <Items />
      </div>
    </Provider>
  )
}
