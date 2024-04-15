import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import imagehero from "../assets/images/img.png";
import about from "../assets/images/about.png";
import search from "../assets/images/Search.png";
import mission from "../assets/images/mission.png";
import logo from "../assets/images/icon.png";


export default function Home() {
  const [volunteers, setVolunteers] = useState(0);
  const [totalCampaigns, setTotalCampaigns] = useState(0);
  const [finishedCampaigns, setFinishedCampaigns] = useState(0);
  const targetVolunteers = 280; 
  const targetCampaigns = 110;
  const targetfinishedCampaigns = 60;

  useEffect(() => {
    const interval = setInterval(() => {
      if (volunteers < targetVolunteers) {
        setVolunteers((prevCount) => prevCount + 1);
      }
      if (totalCampaigns < targetCampaigns) {
        setTotalCampaigns((prevCount) => prevCount + 1);
      }
      if (finishedCampaigns < targetfinishedCampaigns) {
        setFinishedCampaigns((prevCount) => prevCount + 1);
      }
    }, 6);

    return () => clearInterval(interval);
  }, [volunteers, totalCampaigns, finishedCampaigns, targetVolunteers, targetCampaigns]);

  return (
    <div>
      {/* hero */}
      <div className="container hero">
        <div className="row align-items-center ">
          <div className="col-lg-6 herotext">
            <h1 style={{ fontWeight: "700", fontFamily: "serif" }}>
              Make a Difference: Join Our Clean-Up Campaigns
            </h1>
            <p>
              Together, we can create cleaner, healthier communities by
              volunteering for our environmental clean-up events. Your
              participation not only contributes to tangible changes but also
              inspires others to take action. Embrace the opportunity and join
              us in our commitment to building a brighter, cleaner future for
              generations to come.
            </p>
            <button className="btn">Get Started</button>
          </div>
          <div className="col-lg-6">
            <img src={imagehero} alt="Hero" width={700} height={600} />
          </div>
        </div>
      </div>
      {/* small section */}
      <div className="bg-success text-white px-5 py-4 text-center align-items-center ">
        <p
          className="animate__animated animate__heartBeat animate__delay-2s fw-bold py-4"
          style={{ fontSize: "50px" }}
        >
          Join Us in Our mission
        </p>
        <div className="counters-container">
          <div className="counter-item">
            <h1 className="fw-bold">{volunteers}+</h1>
            <p>Volunteers</p>
          </div>
          <div className="counter-item">
          <h1 className="fw-bold">{totalCampaigns}+</h1>
            <p>Total Campaigns</p>
          </div>
          <div className="counter-item">
            <h1 className="fw-bold">{finishedCampaigns}+</h1>
            <p>Finished campaigns</p>
          </div>
        </div>
      </div>
      {/* about */}
      <div id="about">
        <div className="container py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 mx-auto mt-5 abot">
              <img
                className="header-image"
                style={{ marginTop: "10px" }}
                src={about}
                alt="About"
              />
            </div>
            <div className="col-lg-5 mx-auto">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "50px",
                  display: "flex",
                  fontFamily: "serif",
                  alignItems: "center",
                }}
              >
                About Us
              </p>
              <p style={{ fontSize: "14px", color: "gray" }}>
                we're a community committed to cleaning beaches and public
                places, making them safe and beautiful for everyone. Born from a
                passion for protecting the environment, we encourage everyone to
                join our hands-on efforts. Together, let's make a tangible
                difference-one cleanup at a time
              </p>
              <div className="d-flex my-4 align-items-center">
                <img
                  className="header-image p-1 pt-2"
                  style={{ border: "1px solid #dad9de", borderRadius: "8px" }}
                  src={search}
                  alt="us"
                  height={100}
                  width={100}
                />
                <div>
                  <h4 className="mx-3" style={{ fontFamily: "serif" }}>
                    Who are we?
                  </h4>
                  <p className="text-gray mx-3 " style={{ fontSize: "12px" }}>
                    We are a passionate community dedicated to environmental
                    stewardship, united in our mission to create cleaner and
                    healthier spaces for all.
                  </p>
                </div>
              </div>
              <div className="d-flex my-4 align-items-center">
                <img
                  className="header-image p-1 pt-2"
                  style={{ border: "1px solid #dad9de", borderRadius: "8px" }}
                  src={mission}
                  alt="mission"
                  height={100}
                  width={100}
                />
                <div>
                  <h4 className="mx-3" style={{ fontFamily: "serif" }}>
                    Our mission.
                  </h4>
                  <p className="text-gray mx-3 " style={{ fontSize: "12px" }}>
                    Our mission is to inspire and mobilize individuals to
                    actively participate in clean-up campaigns, fostering a
                    sustainable future for our planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partnership */}
      <div className="container">
        <div className="row">
          <div className="row my-5">
            <div className="content text-center">
              <h1
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}
              >
                Our Partnership
              </h1>
              <p style={{ fontSize: "13px" }}>
                Partnering for a sustainable tomorrow. <br />
                Together, we innovate and inspire change.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="logo-slider-container">
              <div className="logo-slider d-flex">
                <div className="logo-item">
                  <img src={logo} alt="Logo 1" />
                </div>
                <div className="logo-item">
                  <img src={logo} alt="Logo 2" />
                </div>
                <div className="logo-item">
                  <img src={logo} alt="Logo 3" />
                </div>
                <div className="logo-item">
                  <img src={logo} alt="Logo 4" />
                </div>
                <div className="logo-item">
                  <img src={logo} alt="Logo 5" />
                </div>
                <div className="logo-item">
                  <img src={logo} alt="Logo 6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Compaigns */}
      <div className="my-5" style={{ marginTop: "40px" }}>
        <p
          style={{
            fontWeight: "600",
            fontSize: "50px",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
          className="animate__animated animate__heartBeat animate__delay-4s fw-bolder "
        >
          Compaigns
        </p>
        <p className="text-center">
          Join us in our campaign to create cleaner <br></br>communities and
          make alasting impact on the environment
        </p>
        <div className="container my-5">
          <div className="row d-flex">
            <div className="col-lg-4">
              <div className="blackbox">
                <div className="service">
                  <div className="iconbox">
                    <img src={logo} alt="" />
                  </div>
                  <div style={{ marginTop: "-9px", marginLeft: "15px" }}>
                    <h3 className="mx-4 fs-3 fw-bold  ">ADSL Plus Internet</h3>
                    <div
                      className="d-flex mt-2 "
                      style={{ marginLeft: "17px" }}
                    >
                      <p
                        className="py-1 px-2"
                        style={{
                          fontSize: "8px",
                          border: "1px solid #dad9de",
                          borderRadius: "20px",
                        }}
                      >
                        thursday 18/4/2024
                      </p>
                      <ul className="fw-bold" style={{ fontSize: "10px" }}>
                        <li>in mogadishu</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "-30px", paddingLeft: "15px" }}
                >
                  <div className="col-lg-11">
                    <p>
                      Broadband for your home and office Broadband for your home
                      and office Broadband for your home and office
                    </p>
                  </div>
                </div>
                <div className="row " style={{ marginTop: "40px" }}>
                  <div className="col-lg-6 ">
                    <ProgressBar now={20} variant="success" />
                    <p className="fw-bold ">3/10</p>
                  </div>
                  <div className="col-lg-6">
                    <button
                      className="btn btn-success"
                      style={{
                        marginTop: "-15px",
                        marginLeft: "60px",
                        width: "100px",
                      }}
                    >
                      Join{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blackbox">
                <div className="service">
                  <div className="iconbox">
                    <img src={logo} alt="" />
                  </div>
                  <div style={{ marginTop: "-9px", marginLeft: "15px" }}>
                    <h3 className="mx-4 fs-3 fw-bold  ">ADSL Plus Internet</h3>
                    <div
                      className="d-flex mt-2 "
                      style={{ marginLeft: "17px" }}
                    >
                      <p
                        className="py-1 px-2"
                        style={{
                          fontSize: "8px",
                          border: "1px solid #dad9de",
                          borderRadius: "20px",
                        }}
                      >
                        thursday 18/4/2024
                      </p>
                      <ul className="fw-bold" style={{ fontSize: "10px" }}>
                        <li>in mogadishu</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "-30px", paddingLeft: "15px" }}
                >
                  <div className="col-lg-12">
                    <p>
                      Broadband for your home and office Broadband for your home
                      and office Broadband for your home and office
                    </p>
                  </div>
                </div>
                <div className="row " style={{ marginTop: "40px" }}>
                  <div className="col-lg-6 ">
                    <ProgressBar now={20} variant="success" />
                    <p className="fw-bold ">3/10</p>
                  </div>
                  <div className="col-lg-6">
                    <button
                      className="btn btn-success"
                      style={{
                        marginTop: "-15px",
                        marginLeft: "66px",
                        width: "100px",
                      }}
                    >
                      Join{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blackbox">
                <div className="service">
                  <div className="iconbox">
                    <img src={logo} alt="" />
                  </div>
                  <div style={{ marginTop: "-9px", marginLeft: "15px" }}>
                    <h3 className="mx-4 fs-3 fw-bold  ">ADSL Plus Internet</h3>
                    <div
                      className="d-flex mt-2 "
                      style={{ marginLeft: "17px" }}
                    >
                      <p
                        className="py-1 px-2"
                        style={{
                          fontSize: "8px",
                          border: "1px solid #dad9de",
                          borderRadius: "20px",
                        }}
                      >
                        thursday 18/4/2024
                      </p>
                      <ul className="fw-bold" style={{ fontSize: "10px" }}>
                        <li>in mogadishu</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "-30px", paddingLeft: "15px" }}
                >
                  <div className="col-lg-12">
                    <p>
                      Broadband for your home and office Broadband for your home
                      and office Broadband for your home and office
                    </p>
                  </div>
                </div>
                <div className="row " style={{ marginTop: "40px" }}>
                  <div className="col-lg-6 ">
                    <ProgressBar now={20} variant="success" />
                    <p className="fw-bold ">3/10</p>
                  </div>
                  <div className="col-lg-6">
                    <button
                      className="btn btn-success"
                      style={{
                        marginTop: "-15px",
                        marginLeft: "66px",
                        width: "100px",
                      }}
                    >
                      Join{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-lg-4">
              <div className="blackbox">
                <div className="service">
                  <div className="iconbox">
                    <img src={logo} alt="" />
                  </div>
                  <div style={{ marginTop: "-9px", marginLeft: "15px" }}>
                    <h3 className="mx-4 fs-3 fw-bold  ">ADSL Plus Internet</h3>
                    <div
                      className="d-flex mt-2 "
                      style={{ marginLeft: "17px" }}
                    >
                      <p
                        className="py-1 px-2"
                        style={{
                          fontSize: "8px",
                          border: "1px solid #dad9de",
                          borderRadius: "20px",
                        }}
                      >
                        thursday 18/4/2024
                      </p>
                      <ul className="fw-bold" style={{ fontSize: "10px" }}>
                        <li>in mogadishu</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "-30px", paddingLeft: "15px" }}
                >
                  <div className="col-lg-11">
                    <p>
                      Broadband for your home and office Broadband for your home
                      and office Broadband for your home and office
                    </p>
                  </div>
                </div>
                <div className="row " style={{ marginTop: "40px" }}>
                  <div className="col-lg-6 ">
                    <ProgressBar now={20} variant="success" />
                    <p className="fw-bold ">3/10</p>
                  </div>
                  <div className="col-lg-6">
                    <button
                      className="btn btn-success"
                      style={{
                        marginTop: "-15px",
                        marginLeft: "60px",
                        width: "100px",
                      }}
                    >
                      Join{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blackbox">
                <div className="service">
                  <div className="iconbox">
                    <img src={logo} alt="" />
                  </div>
                  <div style={{ marginTop: "-9px", marginLeft: "15px" }}>
                    <h3 className="mx-4 fs-3 fw-bold  ">ADSL Plus Internet</h3>
                    <div
                      className="d-flex mt-2 "
                      style={{ marginLeft: "17px" }}
                    >
                      <p
                        className="py-1 px-2"
                        style={{
                          fontSize: "8px",
                          border: "1px solid #dad9de",
                          borderRadius: "20px",
                        }}
                      >
                        thursday 18/4/2024
                      </p>
                      <ul className="fw-bold" style={{ fontSize: "10px" }}>
                        <li>in mogadishu</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "-30px", paddingLeft: "15px" }}
                >
                  <div className="col-lg-12">
                    <p>
                      Broadband for your home and office Broadband for your home
                      and office Broadband for your home and office
                    </p>
                  </div>
                </div>
                <div className="row " style={{ marginTop: "40px" }}>
                  <div className="col-lg-6 ">
                    <ProgressBar now={20} variant="success" />
                    <p className="fw-bold ">3/10</p>
                  </div>
                  <div className="col-lg-6">
                    <button
                      className="btn btn-success"
                      style={{
                        marginTop: "-15px",
                        marginLeft: "66px",
                        width: "100px",
                      }}
                    >
                      Join{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blackbox">
                <div className="service">
                  <div className="iconbox">
                    <img src={logo} alt="" />
                  </div>
                  <div style={{ marginTop: "-9px", marginLeft: "15px" }}>
                    <h3 className="mx-4 fs-3 fw-bold  ">ADSL Plus Internet</h3>
                    <div
                      className="d-flex mt-2 "
                      style={{ marginLeft: "17px" }}
                    >
                      <p
                        className="py-1 px-2"
                        style={{
                          fontSize: "8px",
                          border: "1px solid #dad9de",
                          borderRadius: "20px",
                        }}
                      >
                        thursday 18/4/2024
                      </p>
                      <ul className="fw-bold" style={{ fontSize: "10px" }}>
                        <li>in mogadishu</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "-30px", paddingLeft: "15px" }}
                >
                  <div className="col-lg-12">
                    <p>
                      Broadband for your home and office Broadband for your home
                      and office Broadband for your home and office
                    </p>
                  </div>
                </div>
                <div className="row " style={{ marginTop: "40px" }}>
                  <div className="col-lg-6 ">
                    <ProgressBar now={20} variant="success" />
                    <p className="fw-bold ">3/10</p>
                  </div>
                  <div className="col-lg-6">
                    <button
                      className="btn btn-success"
                      style={{
                        marginTop: "-15px",
                        marginLeft: "66px",
                        width: "100px",
                      }}
                    >
                      Join{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
