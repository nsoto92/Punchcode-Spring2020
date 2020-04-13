import React from "react"
import { useFeatProducts } from "../hooks"
import { useItems } from "../hooks"
import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

export default (props) => {
  const { products } = useFeatProducts()
  const { add } = useItems()
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <div className="features">
          <h1>Featured</h1>
        </div>
      </div>

      <div className="site-slider-three px-md-4">
        <div className="slider-three row text-center px-4">
          {products.map((product) => (
            <div className="col-md-2 product pt-md-5">
              <Link to="/products">
                <img
                  src={product.image}
                  className="img-fluid homeProd"
                  alt="Image 1"
                />
              </Link>
              <div className="cart-details">
                <h6 className="pro-title p-0">{product.name}</h6>
                <div className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="pro-price py-2">
                  <h5>
                    <small>
                      <span className="text-secondary">{product.price}</span>
                    </small>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-btn">
          <span className="prev position-top">
            <i className="fas fa-chevron-left fa-2x text-secondary"></i>
          </span>
          <span className="next position-top right-0">
            <i className="fas fa-chevron-right fa-2x text-secondary"></i>
          </span>
        </div>
      </div>
    </div>
  )
}
