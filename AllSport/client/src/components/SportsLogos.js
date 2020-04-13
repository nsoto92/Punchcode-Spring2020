import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 3000,
      cssEase: "linear",
    }
    return (
      <div className="container-fluid">
        <div className="container text-center">
          <div className="features">
            <h1>Explore Pro Sports</h1>
          </div>

          <Slider {...settings}>
            <div>
              <img src="./assets/nhl.png" alt="Brand 1" className="img-fluid" />
            </div>
            <div>
              <img src="./assets/nfl.png" alt="Brand 2" className="img-fluid" />
            </div>
            <div>
              <img src="./assets/mls.png" alt="Brand 3" className="img-fluid" />
            </div>
            <div>
              <img src="./assets/nba.png" alt="Brand 4" className="img-fluid" />
            </div>
            <div>
              <img src="./assets/mlb.png" alt="Brand 5" className="img-fluid" />
            </div>
            <div>
              <img
                src="./assets/wnba.png"
                alt="Brand 6"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="./assets/nascar.png"
                alt="Brand 7"
                className="img-fluid"
              />
            </div>
            <div>
              <img src="./assets/pga.png" alt="Brand 8" className="img-fluid" />
            </div>
            <div>
              <img
                src="./assets/lpga.png"
                alt="Brand 9"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="./assets/atp.png"
                alt="Brand 10"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="./assets/wta.png"
                alt="Brand 11"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="./assets/usatf.png"
                alt="Brand 12"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="./assets/wps.png"
                alt="Brand 13"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="./assets/pbr.png"
                alt="Brand 14"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="./assets/prca.png"
                alt="Brand 15"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="./assets/pba.png"
                alt="Brand 16"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="./assets/uspv.png"
                alt="Brand 17"
                className="img-fluid"
              />
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}
