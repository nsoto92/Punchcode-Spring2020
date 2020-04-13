import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { Link } from "react-router-dom"
import "../styles/home.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default (props) => {
  return (
    <div className="container-fluid p-0">
      <div className="site-slider">
        <Carousel>
          <Carousel.Item>
            <Link to="/products">
              <img
                className="d-block w-100"
                src="./assets/item1.png"
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/products">
              <img
                className="d-block w-100"
                src="./assets/new-nike.png"
                alt="Second slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/products">
              <img
                className="d-block w-100"
                src="./assets/item-3.png"
                alt="Third slide"
              />
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}
