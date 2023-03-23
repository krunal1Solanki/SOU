import React from "react";
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


const options = {
  logo: ecommerceImage, // assign the image to the logo property
  logoWidth: "10vmax",
  burgerMarginBottom : "5px",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "About",
  link4Text: "Login/Register",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/about",
  link4Url: "/login",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  // add background color and style
  navStyle: {
  backgroundColor: "#333",
  padding: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  marginTop: "-5px" // Add this line to move the navbar up
}
,
};

const Header = () => {
  return (
    <>
     
      <ReactNavbar {...options} />
    </>
  );
};

export default Header;
