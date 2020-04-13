// Coded by Norbert M. Soto (https://github.com/nsoto92)

import React from "react"
import { Link } from "react-router-dom"

import { useItems } from "../hooks"
import "../styles/products.css"

export default (props) => {
  const { cart, total } = useItems()

  return (
    <div className="entirePage">
      <div className="receiptContainer">
        <h1>Order Summary</h1>
        <h5>Order # - Date</h5>
        <div className="receiptSummary">
          {cart.map((product, i) => (
            <div className="checkoutProds">
              <p>{product.title}</p> <p>Qty: {product.quantity}</p>
              <p> Total: {product.price}</p>
            </div>
          ))}
        </div>
        <div className="checkoutTotal">
          <h3>Total: ${total}</h3>
          <Link to="/contactUs">
            <h3>Questions/Concerns about your order?</h3>
          </Link>
        </div>
        <h1>Thank you for shopping with AllSports!</h1>
      </div>
    </div>
  )
}
