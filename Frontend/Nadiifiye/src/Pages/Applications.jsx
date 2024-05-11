import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHourglassHalf, FaTimesCircle, FaCheckCircle } from "react-icons/fa";

function Applications() {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get("http://localhost:4000/application");
      setApplications(response.data);
    } catch (error) {
      setError("Error fetching applications. Please try again later.");
    }
  };

  const handleView = (applicationId) => {
    navigate(`viewapplicants/${applicationId}`);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Applications of request</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className=" py-2">Name</th>
            <th className=" py-2">Status</th>
            <th className=" py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications && applications.length > 0 ? (
            applications.map((application) => (
              <tr key={application._id}>
                <td className="border px-4 py-2">{application.orgName}</td>
                <td className="border px-4 py-3 d-flex items-center">
                  {application.status === "pending" && (
                    <FaHourglassHalf className="text-yellow-500 mr-2" />
                  )}
                  {application.status === "rejected" && (
                    <FaTimesCircle className="text-red-500 mr-2" />
                  )}
                  {application.status === "approved" && (
                    <FaCheckCircle className="text-green-500 mr-2" />
                  )}
                  {application.status}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleView(application._id)}
                    className="mr-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No applications found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Applications;
