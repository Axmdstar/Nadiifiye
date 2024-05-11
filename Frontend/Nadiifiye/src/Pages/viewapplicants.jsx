import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ViewApplicants({ match }) {
  const [application, setApplication] = useState(null);
  const [error, setError] = useState(null);
  const [isApproved, setIsApproved] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/application/${id}`
        );
        setApplication(response.data);
        setIsApproved(response.data.status === "approve");
        setIsRejected(response.data.status === "reject");
      } catch (error) {
        setError("Error fetching application. Please try again later.");
      }
    };
    fetchApplication();
  }, [id]);
  const handleApprove = async () => {
    try {
      await axios.put(`http://localhost:4000/application/approve/${id}`);
      toast.success("Application approved successfully");
      setApplication({ ...application, status: "approved" });
      setIsApproved(true);
      setIsRejected(false);
    } catch (error) {
      setError("Error approving application. Please try again later.");
    }
  };

  const handleReject = async () => {
    try {
      await axios.put(`http://localhost:4000/application/reject/${id}`);
      toast.error("Application rejected successfully");
      setApplication({ ...application, status: "rejected" });
      setIsApproved(false);
      setIsRejected(true);
    } catch (error) {
      console.error(error);
      setError("Error rejecting application. Please try again later.");
    }
  };
  if (error) {
    return <div className="mt-5 ml-4">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">View Application</h2>
      {application ? (
        <table className="min-w-full">
          <tbody>
            <tr>
              <td className="font-bold  py-2">Organization Name:</td>
              <td className="border px-4 py-2">{application.orgName}</td>
            </tr>
            <tr>
              <td className="font-bold py-2">Phone:</td>
              <td className="border px-4 py-2">{application.phone}</td>
            </tr>
            <tr>
              <td className="font-bold py-2">Address:</td>
              <td className="border px-4 py-2">{application.address}</td>
            </tr>
            <tr>
              <td className="font-bold py-2">Email:</td>
              <td className="border px-4 py-2">{application.email}</td>
            </tr>
            <tr>
              <td className="font-bold py-2">Organization Type:</td>
              <td className="border px-4 py-2">{application.orgType}</td>
            </tr>
            <tr>
              <td className="font-bold py-2">Profile Picture:</td>
              <td className="border px-4 py-2">
                <img src={application.profilePicture} alt="Profile Picture" />
              </td>
            </tr>
            <tr>
              <td className="font-bold  py-2">Website:</td>
              <td className="border px-4 py-2">{application.website}</td>
            </tr>
            <tr>
              <td className="font-bold  py-2">Why Organizer:</td>
              <td className="border px-4 py-2">{application.whyOrganizer}</td>
            </tr>
            <tr>
              <td className="font-bold  py-2">
                motivation to organize events or campaigns:
              </td>
              <td className="border px-4 py-2">{application.motivation1}</td>
            </tr>
            <tr>
              <td className="font-bold  py-2">impact to make</td>
              <td className="border px-4 py-2">{application.motivation2}</td>
            </tr>
            <td className="font-bold py-2">Status:</td>
            <td className="border px-4 py-2">{application.status}</td>
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
      <div className="flex mt-4">
        {!isApproved && (
          <button
            onClick={handleApprove}
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 mr-4 rounded"
          >
            Approve
          </button>
        )}
        {!isRejected && (
          <button
            onClick={handleReject}
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            {isApproved ? "Remove" : "Reject"}
          </button>
        )}
      </div>
    </div>
  );
}

export default ViewApplicants;
