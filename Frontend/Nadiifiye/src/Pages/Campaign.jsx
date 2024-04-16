import React, { useState, useEffect } from "react";
import logo from "../assets/images/icon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import "../../public/style.css";

export default function Campaign() {
  const endpoint = "http://localhost:4000" ;
  const [campaigns, setCampaigns] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("date");
  const [sortDirection, setSortDirection] = useState("asc");


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${endpoint}/Campaign/AllCampaigns`);
        setCampaigns(response.data);
        
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    }
    fetchData();
  }, []);



  const handleSortChange = (e) => {
    setSortType(e.target.value);
    setSortDirection("asc");
  };

  const handleSortToggle = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "asc" ? "desc" : "asc"
    );
  };




  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCampaigns = filteredCampaigns.sort((a, b) => {
    let comparison = 0;
    const dateA = moment(a.DateTime);
    const dateB = moment(b.DateTime);

    if (sortType === "date") {
      comparison = dateA.diff(dateB);
    } else if (sortType === "name") {
      comparison = a.Name.localeCompare(b.Name);
    } else if (sortType === "progress") {
      const progressA = (a.currentNumOfPeople / a.NumOfPeople) * 100;
      const progressB = (b.currentNumOfPeople / b.NumOfPeople) * 100;
      comparison = progressA - progressB;
    }

    return sortDirection === "asc" ? comparison : comparison * -1;
  });


  const handleJoinCampaign = async (id) => {
    try {
      const response = await axios.patch(`${endpoint}/Campaign/Join/${id}`);
      const updatedCampaigns = campaigns.map((campaignItem) => {
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
      setCampaigns(updatedCampaigns);

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
    <div className="my-5 campaign" style={{ marginTop: "40px" }}>
      <div className="container d-flex justify-content-between campHeader">
        <div className="container">
          <p
            style={{
              fontWeight: "600",
              fontSize: "50px",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="animate__animated animate__heartBeat animate__delay-4s fw-bolder"
          >
            Campaigns
          </p>
          <p className="">
            Join us in our campaign to create cleaner communities <br /> and
            make a lasting impact on the environment.
          </p>
        </div>
        <div className="search-sort d-flex ">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select value={sortType} onChange={handleSortChange}>
            <option value="date">Sort by Date</option>
            <option value="name">Sort by Name</option>
            <option value="progress">Sort by Progress</option>
          </select>
          <button className="sort-btn" onClick={handleSortToggle}>
            {sortDirection === "asc" ? <BsArrowUp /> : <BsArrowDown />}
          </button>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          {sortedCampaigns.map((campaign) => (
            <div className="col-lg-4 p-4" key={campaign._id}>
            <div className="blackbox">
              <div className="service">
                <div className="iconbox">
                    <img
                      src={`${endpoint}/uploads/campaignImage/${campaign.Image}`}
                      alt={campaign.Name}
                    />
                </div>
                <div style={{ marginTop: "-9px", marginLeft: "15px" }}>
                    <h3 className="mx-4 fs-3 fw-bold">{campaign.Name}</h3>
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
                    <ul className="fw-bold" style={{ fontSize: "12px", marginLeft:"15px"}}>
                        <li>{campaign.Location}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{ marginTop: "-30px", paddingLeft: "15px" }}
              >
                <div className="col-lg-12">
                    <p>{campaign.Description}</p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "40px",marginLeft:"3px" }}>
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
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
