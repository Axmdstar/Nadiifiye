import React from "react";
import "../../public/style.css";
import logo from "../assets/images/logo2.png";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container-fluid foter list">
      <div className="row text-center d-flex my-4 pt-2">
        <div className="col-4 ">
          <div className="logofooter">
            <img
              src={logo}
              alt="logo"
              width={350}
              height={210}
              style={{ marginTop: "-30px", marginLeft: "-40px" }}
            />
          </div>
        </div>
        <div className="col-8 subs" style={{ marginLeft: "-45px" }}>
          <div className="text-white py-4 substext">
            <h5 className="text-center fw-bold ">
              Subscribe to our Newsletter
            </h5>
          </div>
          <div
            className="form-group col-4 py-4 d-flex gap-2 "
            style={{ marginLeft: "365px", marginTop: "-30px" }}
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
            className="footertext text-white px-5 mx-5 "
            style={{ marginTop: "-45px", marginLeft: "30px" }}
          >
            Nadiifiye System, join us in our mission to preserve nature's beauty
            and safeguard our planet. Together, let's make a meaningful impact
            and inspire generations to come. Nadiifiye System - Transforming
            today for a cleaner, greener tomorrow.
          </p>
          <div className="social-icons  mt-2" style={{marginLeft:"90px"}}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: '5px',
                padding: '5px 10px 10px 10px',
                textDecoration: 'none',
                color: '#1877F2',
                marginRight:"10px"
              }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: '5px',
                padding: '5px 10px 10px 10px',
                textDecoration: 'none',
                color: '#25D366', 
                marginRight:"10px"
              }}
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: '5px',
                padding: '5px 10px 10px 10px',
                textDecoration: 'none',
                color: '#1DA1F2', 
                marginRight:"10px"
              }}
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: '5px',
                padding: '5px 10px 10px 10px',
                textDecoration: 'none',
                color: '#C13584', 
                marginRight:"10px"
              }}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div
          className="col-lg-3 text-white contactinfo"
          style={{ marginLeft: "60px", marginTop: "-35px" }}
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
        <div className="col-lg-2 text-white linkss" style={{ marginTop: "-35px" }}>
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
      <div className="row">
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
