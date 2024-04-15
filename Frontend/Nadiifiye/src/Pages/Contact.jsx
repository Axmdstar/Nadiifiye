import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=&librarie&callback=initMap`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    document.head.appendChild(googleMapsScript);

    window.initMap = () => {
      // Specify the coordinates for Mogadishu, Somalia
      const location = { lat: 2.0469, lng: 45.3182 };

      // Create a map object and specify the DOM element for display
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 14,
      });

      // Create a marker and set its position
      new window.google.maps.Marker({
        map,
        position: location,
        title: "Company Name",
      });
    };

    return () => {
      // Clean up script when component unmounts
      document.head.removeChild(googleMapsScript);
      delete window.initMap;
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="container my-5 contact">
      <h1 className="fw-bold">Contact us</h1>
      <p>
        Thank you for visiting our website! If you have any questions, <br></br>feedback,
        or inquiries, please feel free to Contact us.
      </p>
      <hr className="white-line-contact"></hr>
      <div className="container d-flex this">
        <div className="location">
          <div className="col">
            <div className="d-flex align-items-center ">
              <FaMapMarkerAlt
                className="p-2 fs-1 "
                style={{
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "3px",
                }}
              />
              <div className="mx-4">
                <h5>Address</h5>
                <p style={{ marginTop: "-10px" }}>Taalax, Mogadishu, Somalia</p>
              </div>
            </div>
            <div className="d-flex">
              <FaEnvelope
                className="p-2 fs-1 "
                style={{
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "3px",
                }}
              />
              <div className="mx-4">
                <h5>Email</h5>
                <p style={{ marginTop: "-10px" }}>info@nadiifiye.org</p>
              </div>
            </div>
            <div className="d-flex">
              <FaPhone
                className="p-2 fs-1 "
                style={{
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "3px",
                }}
              />
              <div className="mx-4">
                <h5>Phone</h5>
                <p style={{ marginTop: "-10px" }}>+1 123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="row map" style={{ height: "380px", width: "500px" }}>
            <div className="map2">
              <h2>Location</h2>
              <div className="mapp" id="map" style={{ height: "260px", width: "630px" }}></div>
            </div>
          </div>
        </div>
        <div>
          <div className="contactform" style={{ marginLeft: "280px",marginTop: "-130px" }}>
            <h1 className="fw-bolder">Send Message:</h1>
            <div
              style={{
                border: "1px solid #c5c5c5",
                borderRadius: "5px",
                padding: "40px 30px 30px 20px",
                backgroundColor: "green",
              }}
            >
              <form
                action="/send_message"
                method="POST"
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingBottom: "10px",
                }}
              >
                <label className="text-white fw-bold " >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control name"
                  name="name"
                  required
                  style={{ width: "400px" }}
                />
                <br></br>
                <label className="text-white fw-bold " htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  required
                  
                />
                <br></br>
                <label className="text-white fw-bold " htmlFor="email">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form-control"
                  name="subject"
                  required
                  
                />
                <br></br>
                <label className="text-white fw-bold " htmlFor="description">
                  Description:
                </label>
                <textarea
                  id="description"
                  className="form-control"
                  name="description"
                  rows="5"
                  cols="30"
                  required
                  
                ></textarea>
                <input
                  type="submit"
                  className="btn text-white my-3"
                  style={{ backgroundColor: "#221050" }}
                  value="Send Message"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

