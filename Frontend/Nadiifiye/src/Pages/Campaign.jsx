import React from "react";
import logo from "../assets/images/icon.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

export default function Campaign() {
  return (
    <div className="my-5 campaign" style={{ marginTop: "40px" }}>
      <div className=" container d-flex justify-content-between campHeader">
        <div className="container">
          <p
            style={{
              fontWeight: "600",
              fontSize: "50px",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="animate__animated animate__heartBeat animate__delay-4s fw-bolder "
          >
            Compaigns
          </p>
          <p className="">
            Join us in our campaign to create cleaner communities <br></br> and
            make alasting impact on the environment.
          </p>
        </div>
        <div className="search-sort d-flex ">
          <input type="text" placeholder="Search..." />
          <select>
            <option value="date">Sort by Date</option>
            <option value="name">Sort by Name</option>
            {/* <option value="progress">Sort by Progress</option> */}
            {/* <option value="popularity">Sort by Popularity</option> */}
          </select>
          <button className="sort-btn">
            <BsArrowUp />
            <BsArrowDown />
          </button>
        </div>
      </div>
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
                  <div className="d-flex mt-2 " style={{ marginLeft: "17px" }}>
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
                  <div className="d-flex mt-2 " style={{ marginLeft: "17px" }}>
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
                  <div className="d-flex mt-2 " style={{ marginLeft: "17px" }}>
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
                  <div className="d-flex mt-2 " style={{ marginLeft: "17px" }}>
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
                  <div className="d-flex mt-2 " style={{ marginLeft: "17px" }}>
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
                  <div className="d-flex mt-2 " style={{ marginLeft: "17px" }}>
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
  );
}
