// Coded by Norbert M. Soto (https://github.com/nsoto92)
// Coded by Justin Burrows (https://github.com/JustinBurrowsDev)

import React from "react"
import { useProducts } from "../hooks"
import { useItems } from "../hooks"
import { Link } from "react-router-dom"

import "../styles/products.css"

console.log(useProducts)
export default (props) => {
  const { products } = useProducts()
  const { add } = useItems()

  return (
    <div className="prodWrapper">
      <div className="orderSelect">
        <p> {products.length} Product(s) found.</p>
      </div>

      <div>
        <div>
          <div className="prodList">
            {products.map((product) => (
              <div className="prod" key={product.id}>
                <div clasName="imgA">
                  <img className="prodImg" src={product.image} />
                </div>
                <div className="prodDesc">
                  {product.title}
                  <br />${product.price}
                </div>
                <button onClick={(e) => add(product)} className="prodCart1">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
          <div>
            {/* <Link to="/createProduct">
              <button type="submit" className="postLink">
                Post my product!
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
