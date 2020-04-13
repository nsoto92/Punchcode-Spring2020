import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useProducts } from "../hooks"

export default (props) => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const { create } = useProducts()

  const handleSubmit = () => {
    create(title, price, image)
    props.history.push("/products")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product"
          />
          <label>Product Price</label>
          <textarea
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00"
          ></textarea>

          <label>Product Image</label>
          <textarea
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Product Image"
          ></textarea>
          <Link to="/products">
            <button type="ubmit">Post my product!</button>
          </Link>
        </div>
      </form>
    </div>
  )
}
