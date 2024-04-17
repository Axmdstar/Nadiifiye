import React, { useEffect, useState } from "react";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
import imagehero from "../assets/images/img.png";
import "../../public/style.css";
import about from "../assets/images/about.png";
import search from "../assets/images/Search.png";
import mission from "../assets/images/mission.png";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [volunteers, setVolunteers] = useState(0);
  const [totalCampaigns, setTotalCampaigns] = useState(0);
  const [finishedCampaigns, setFinishedCampaigns] = useState(0);
  const [targetVolunteers, setTargetVolunteers] = useState(0);
  const [targetCampaigns, setTargetCampaigns] = useState(0);
  const [targetFinishedCampaigns, setTargetFinishedCampaigns] = useState(0);
  const [organizers, setOrganizers] = useState([]);
  const [lastTwoCampaigns, setLastTwoCampaigns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [totalRes, finishedRes, volunteerRes] = await Promise.all([
          axios.get("http://localhost:4000/Campaign/total"),
          axios.get("http://localhost:4000/Campaign/finishedCampaigns"),
          axios.get("http://localhost:4000/Volunteer/total"),
        ]);

        setTotalCampaigns(totalRes.data.totalCampaigns);
        setFinishedCampaigns(finishedRes.data.totalFinishedCampaigns);
        setVolunteers(volunteerRes.data.totalVolunteers);

        // Update target values based on API responses
        setTargetVolunteers(volunteerRes.data.totalVolunteers);
        setTargetCampaigns(totalRes.data.totalCampaigns);
        setTargetFinishedCampaigns(finishedRes.data.totalFinishedCampaigns);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const interval = setInterval(() => {
      if (volunteers < targetVolunteers) {
        setVolunteers((prevCount) => prevCount + 1);
      }
      if (totalCampaigns < targetCampaigns) {
        setTotalCampaigns((prevCount) => prevCount + 1);
      }
      if (finishedCampaigns < targetFinishedCampaigns) {
        setFinishedCampaigns((prevCount) => prevCount + 1);
      }
    }, 60000); // Simulate every 6 seconds

    fetchData(); // Initial fetch
    const fetchInterval = setInterval(fetchData, 6000); // Fetch data every 6 seconds

    return () => {
      clearInterval(interval);
      clearInterval(fetchInterval);
    };
  }, [
    volunteers,
    totalCampaigns,
    finishedCampaigns,
    targetVolunteers,
    targetCampaigns,
    targetFinishedCampaigns,
  ]);
  useEffect(() => {
    const fetchOrganizers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/Organizer/AllOrganizers"
        );
        setOrganizers(response.data);
      } catch (error) {
        console.error("Error fetching organizers:", error);
      }
    };

    fetchOrganizers(); // Fetch organizers when component mounts
  }, []); // Empty dependency array to run effect only once
  useEffect(() => {
    const fetchLastTwoCampaigns = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/Campaign/lastTwoCampaigns"
        );
        setLastTwoCampaigns(response.data);
      } catch (error) {
        console.error("Error fetching last two campaigns:", error);
      }
    };

    fetchLastTwoCampaigns(); // Fetch last two campaigns when component mounts
  }, []);
  const handleJoinCampaign = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:4000/Campaign/Join/${id}`
      );
      const updatedCampaigns = lastTwoCampaigns.map((campaignItem) => {
        if (campaignItem._id === id) {
          const updatedCampaign = {
            ...campaignItem,
            currentNumOfPeople: response.data.currentNumOfPeople,
            NumOfPeople: response.data.NumOfPeople,
          };
          return updatedCampaign;
        }
        return campaignItem;
      });
      setLastTwoCampaigns(updatedCampaigns);

      const campaign = updatedCampaigns.find(
        (campaignItem) => campaignItem._id === id
      );
      if (campaign.currentNumOfPeople === campaign.NumOfPeople) {
        toast.warning("This campaign has already finished.");
      } else {
        toast.success("Campaign joined successfully");
      }
    } catch (error) {
      console.error("Error joining campaign:", error);
      toast.error("Error joining campaign");
    }
  };

  return (
    <div>
      {/* hero */}
      <div className="container hero">
        <div className="row align-items-center ">
          <div className="col-lg-6 herotext">
            <h1 className="mb-3" style={{ fontWeight: "800", fontFamily: "serif" }}>
              Make a Difference: Join Our Clean-<br></br>Up Campaigns
            </h1>
            <p className="mb-3">
              Together, we can create cleaner, healthier communities by
              volunteering for our <br></br>environmental clean-up events. Your
              participation not only contributes to tangible <br></br>changes
              but also inspires others to take action. Embrace the opportunity
              and join us in <br></br>our commitment to building a brighter,
              cleaner future for generations to come.
            </p>
            <Link to="campaigns" className="btn button mt-4">
              Get Started
            </Link>
          </div>
          <div className="col-lg-6">
            <img src={imagehero} alt="Hero" width={600} height={600} />
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
            <p className="fw-bold">Volunteers</p>
          </div>
          <div className="counter-item">
            <h1 className="fw-bold">{totalCampaigns}+</h1>
            <p className="fw-bold">Total Campaigns</p>
          </div>
          <div className="counter-item">
            <h1 className="fw-bold">{finishedCampaigns}+</h1>
            <p className="fw-bold">Finished campaigns</p>
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
                <div style={{ marginTop: "-15px" }}>
                  <h4
                    className="mx-3"
                    style={{ fontFamily: "serif", fontSize: "20px" }}
                  >
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
                <div style={{ marginTop: "-15px" }}>
                  <h4
                    className="mx-3"
                    style={{ fontFamily: "serif", fontSize: "20px" }}
                  >
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
                {organizers.map((organizer, index) => (
                  <div className="logo-item" key={index}>
                    <img
                      src={`http://localhost:4000/organizerImage/${organizer.profileImage}`}
                      alt={`Logo ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* Compaigns */}
      <div className="container my-5 py-5">
        <h1 className="fw-bolder pb-5 recentcamp" style={{fontSize:"30px",marginLeft:"125px"}}>Recent Campaigns</h1>
        <div className="row" style={{justifyContent:"center"}}>
          {lastTwoCampaigns.map((campaign) => (
            <div key={campaign._id} className="col-lg-4 mb-4">
              <div className="blackbox">
                <div className="service">
                  <div className="iconbox">
                    <img
                      src={`http://localhost:4000/uploads/campaignImage/${campaign.Image}`}
                      alt={campaign.Name}
                    />
                  </div>
                  <div style={{ marginTop: "-9px", marginLeft: "15px" }}>
                    <h3 className="mx-4 fs-3 fw-bold">{campaign.Name}</h3>
                    <div className="d-flex mt-2" style={{ marginLeft: "17px" }}>
                      <p
                        className="py-1 px-2"
                        style={{
                          fontSize: "8px",
                          border: "1px solid #dad9de",
                          borderRadius: "20px",
                        }}
                      >
                        {new Date(campaign.DateTime).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "short",
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",
                          }
                        )}
                      </p>
                      <ul className="fw-bold" style={{ fontSize: "10px" , marginLeft:"10px",marginTop:"3px"}}>
                        <li>{campaign.Location}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "-30px", paddingLeft: "15px" }}
                >
                  <div className="col-lg-12" >
                    <p className="p-3">{campaign.Description}</p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "40px" ,marginLeft:"15px"}}>
                  <div className="col-lg-6">
                    <ProgressBar
                      now={
                        (campaign.currentNumOfPeople / campaign.NumOfPeople) *
                        100
                      }
                      variant={
                        campaign.currentNumOfPeople === campaign.NumOfPeople ||
                        moment(campaign.DateTime).isSameOrBefore(
                          moment().startOf("day")
                        )
                          ? "success"
                          : "primary"
                      }
                    />
                    <p className="fw-bold">{`${campaign.currentNumOfPeople}/${campaign.NumOfPeople}`}</p>
                  </div>
                  <div className="col-lg-6">
                    <button
                      className={`btn ${
                        campaign.currentNumOfPeople === campaign.NumOfPeople ||
                        moment(campaign.DateTime).isSameOrBefore(
                          moment().startOf("day")
                        )
                          ? "btn-success disabled"
                          : "btn-primary"
                      }`}
                      style={{
                        marginTop: "-15px",
                        marginLeft: "66px",
                        width: "100px",
                      }}
                      onClick={() =>
                        campaign.currentNumOfPeople !== campaign.NumOfPeople &&
                        moment(campaign.DateTime).isAfter(
                          moment().startOf("day")
                        ) &&
                        !campaign.completed &&
                        handleJoinCampaign(campaign._id)
                      }
                      disabled={
                        campaign.currentNumOfPeople === campaign.NumOfPeople ||
                        moment(campaign.DateTime).isSameOrBefore(
                          moment().startOf("day")
                        )
                      } // Disable button if campaign is completed or past its date
                    >
                      {campaign.currentNumOfPeople === campaign.NumOfPeople ||
                      moment(campaign.DateTime).isSameOrBefore(
                        moment().startOf("day")
                      )
                        ? "ended"
                        : "Join"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-2 d-flex align-items-center justify-content-center">
            <Link
              to="campaigns"
              className="btn btn-success rounded-circle shadow-lg"
              style={{
                width: "100px",
                height: "100px",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              View All
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
