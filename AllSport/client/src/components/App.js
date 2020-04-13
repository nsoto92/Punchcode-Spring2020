import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./Header"
import Navbar from "./NavBar"
import Home from "./Home"
import Products from "./Products"
import Players from "./Players"
import PlayerProfiles from "./PlayerProfiles"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import Cart from "./Cart"
import CreateProduct from "./CreateProduct"
import Footer from "./Footer"
import Checkout from "./Checkout"
import "../styles/home.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default (props) => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Cart />
        <Route exact path="/" component={Home}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/players" component={Players}></Route>
        <Route path="/playerProfiles" component={PlayerProfiles}></Route>
        <Route path="/aboutUs" component={AboutUs}></Route>
        <Route path="/contactUs" component={ContactUs}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/createProduct" component={CreateProduct}></Route>
        <Footer />
      </div>
    </Router>
  )
}
