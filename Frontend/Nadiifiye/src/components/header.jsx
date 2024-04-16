import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/Nadii-01.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(scrollToAbout, 500);
    }
  };

  const [isOpnen, setIsOpen] = useState(false);
  const handelbtn = () => {
    setIsOpen(!isOpnen);
  };
  const handleMenuLinkClick = () => {
    console.log("Menu link clicked");
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
      <ul style={{ display: isOpnen ? "none" : "flex" }}>
        <li>
          <Link to="/" onClick={handleMenuLinkClick}>Home</Link>
        </li>
        <li>
          <Link to="/home" onClick={scrollToAbout}>
            About
          </Link>
        </li>
        <li>
          <Link to="./campaigns">Campaigns</Link>
        </li>
        <li>
          <Link to="./contact">Contact Us</Link>
        </li>
        <NavLink  to="/Register" className="btn" style={{ backgroundColor: "#28a745" }} >
          Signup
        </NavLink>
      </ul>
    </div>
  );
}
