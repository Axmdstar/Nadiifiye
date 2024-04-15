import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/Nadii-01.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";


export default function Header() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const [isOpnen, setIsOpen] = useState(false);
  const handelbtn = () => {
    setIsOpen(!isOpnen);
  };
  const handleMenuLinkClick = () => {
    console.log("Menu link clicked");
    // Close the menu only if the screen width is less than 600px
    if (window.innerWidth <= 800) {
      setIsOpen(false); // Close the menu
      console.log("Menu closed");
    }
  };
  return (
    <div className="header">
      <h1>
        <img src={logo} alt="logo" />
      </h1>
      <AiOutlineClose
        style={{ display: isOpnen ? "none" : "block" }}
        onClick={handelbtn}
        className="AiOutlineClose"
      />
      <AiOutlineMenu
        style={{ display: isOpnen ? "block" : "none" }}
        onClick={handelbtn}
        className="AiOutlineMenu"
      />
      <ul style={{display:isOpnen ? "none" : "flex"}}>
        <li>
          <Link to="/Home" onClick={handleMenuLinkClick}>Home</Link>
        </li>
        <li>
          <Link  onClick={scrollToAbout}>
            About
          </Link>
        </li>
        <li>
          <Link to="./campaigns">Campaigns</Link>
        </li>
        <li>
          <Link to="./contact" >Contact Us</Link>
        </li>
        <NavLink className="btn" style={{ backgroundColor: "#28a745" }} to="/Register">
        Signup
      </NavLink>
      </ul>
      
    </div>
  );
}
