import React from "react";
import "../../public/style.css";
import logo from "../assets/images/logo2.png";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container-fluid foter list">
      <div className="row text-center d-flex my-4 pt-2">
        <div className="col-4 looo">
          <div className="logofooter">
            <img
              src={logo}
              alt="logo"
              width={350}
              height={210}
              style={{ marginTop: "-100px", }}
            />
          </div>
        </div>
        <div className="col-8 subs" style={{ marginLeft: "-30px" }}>
          <div className="text-white py-4 substext">
            <h5 className="text-center fw-bolder fs-4   ">
              Subscribe to our Newsletter
            </h5>
          </div>
          <div
            className="form-group col-4 py-4 d-flex gap-2 "
            style={{ marginLeft: "340px", marginTop: "-30px" }}
          >
            <input
              type="email"
              className="form-control p-2"
              placeholder="Enter your email"
            />
            <button className="btn btn-success">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <p
            className=" text-white px-5 mx-5 logotxt"
            style={{ marginTop: "-80px" }}
          >
            Nadiifiye System, join us in our mission to preserve nature's beauty
            and safeguard our planet. Together, let's make a meaningful impact
            and inspire generations to come. Nadiifiye System - Transforming
            today for a cleaner, greener tomorrow.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div
          className="col-lg-3 text-white contactinfo"
          style={{ marginLeft: "60px", marginTop: "-110px" }}
        >
          <h3>Contact Info</h3>
          <ul>
            <li>PHONE: 657950</li>
            <li>landline: 141</li>
            <li>EMAIL: info@Nadiifiye.com</li>
            <li>
              ADDRESS: Km4 Airport Road,<br></br> Wadajir District,<br></br> Mogadishu-Somalia
            </li>
          </ul>
        </div>
        <div className="col-lg-2 text-white linkss" style={{  marginTop: "-110px", marginLeft: "-110px" }}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Campaigns</li>
            <li>Contact Us</li>
            <li>Customer Service</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
      </div>
      <hr className="white-line"></hr>
      <div className="row py-4">
        <div className=" col-12 justify-content-center align-items-center text-white text-center ">
          <p>
            &copy; 2024 Your Website. All rights reserved. | Designed by{" "}
            <a href="https://www.example.com">Team Name</a>
          </p>
        </div>
      </div>
    </div>
  );
}
