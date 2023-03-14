import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import ecommerceImage from "../../../images/ecommerce.png";

const options = {
  burgerColorHover: "#eb4034",
  logo: ecommerceImage, // assign the image to the logo property
  logoWidth: "20vmax",
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
  },
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
