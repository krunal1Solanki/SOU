import React from 'react'
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import ecommerceImage from "../../../images/sou.svg";
import "../Header/Header.css";
import Search from "../../Product/Search";
import PersonIcon from "@material-ui/icons/Home";
import ShopIcon from "@material-ui/icons/Shop";
import InfoIcon from "@material-ui/icons/Info";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/ContactMail";
import '../Header/navigation.css'
const NavigationBar = () => {
  return (
    <div className="navContainer">
    <header className="navHeader">
      <nav>  
        <ul className="unList">
          <div className = "logo"></div>
          <li className="navList x1"><a className="navLink b1" href="/"><PersonIcon className = "but"/>Home</a></li>
          <li className="navList"><a className="navLink b2" href="/products"><ShopIcon className = "but"/>Shop</a></li>
          <li className="navList"><a className="navLink b3" href="/about"><InfoIcon className = "but"/>About</a></li>
          <li className="navList"><a className="navLink b4"  href="/contact"><MailIcon className = "but"/>Contact</a></li>
          <li className="navList"><a className="navLink b5" href="/search"><SearchIcon className = "but"/>Search</a></li>
        </ul>
      </nav>
    </header>
  </div>
    )
  
}

export default NavigationBar