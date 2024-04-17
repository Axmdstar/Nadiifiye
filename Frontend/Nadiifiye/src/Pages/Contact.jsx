import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/contact/send_message",
        formData
      );
      toast.success("message sent successfully");
      // console.log(response.data); // Assuming backend sends a success message
      // Reset form data after successful submission
      setFormData({ name: "", email: "", subject: "", description: "" });
    } catch (error) {
      toast.success("Error sending message, please try again.");
      console.error("Error sending message:", error);
      
      // display error message to user
    }
  };

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
    <div className="container my-5 py-5  contact ">
      <h1 className="fw-bold fs-1">Contact us</h1>
      <p className="contactp">
        Thank you for visiting our website! If you have any questions, <br></br>
        feedback, or inquiries, please feel free to Contact us.
      </p>
      <hr className="white-line-contact"></hr>
      <div className="container d-flex this">
        <div className="location">
          <div className="col">
            <div className="d-flex align-items-center my-3">
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
                <p>Taalax, Mogadishu, Somalia</p>
              </div>
            </div>
            <div className="d-flex my-3">
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
                <p>info@nadiifiye.org</p>
              </div>
            </div>
            <div className="d-flex my-3">
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
                <p>+1 123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="row map" style={{ height: "380px", width: "500px" }}>
            <div className="map2">
              <h2>Location</h2>
              <div
                className="mapp"
                id="map"
                style={{ height: "260px", width: "630px" }}
              ></div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="contactform"
            style={{ marginLeft: "300px", marginTop: "-100px" }}
          >
            <h1 className="fw-bolder fs-2 pb-3">Send Message:</h1>
            <div
              style={{
                border: "1px solid #c5c5c5",
                borderRadius: "5px",
                padding: "40px 30px 30px 20px",
                backgroundColor: "green",
              }}
            >
              <form
                // action="/send_message"
                onSubmit={handleSubmit}
                // method="POST"
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingBottom: "10px",
                }}
              >
                <label className="text-white fw-bold ">Name:</label>
                <input
                  type="text"
                  id="name"
                  className="form-control name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
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
                  value={formData.description}
                  onChange={handleChange}
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
      <ToastContainer />
    </div>
  );
}
