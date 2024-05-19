import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    orgName: "",
    phone: "",
    address: "",
    orgType: "",
    profilePicture: null,
    website: "",
    whyOrganizer: "",
    motivation1: "",
    motivation2: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    username,
    email,
    password,
    orgName,
    phone,
    address,
    orgType,
    profilePicture,
    website,
    whyOrganizer,
    motivation1,
    motivation2,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleProfilePictureChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("orgName", orgName);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("orgType", orgType);
      formData.append("profilePicture", profilePicture);
      formData.append("website", website);
      formData.append("whyOrganizer", whyOrganizer);
      formData.append("motivation1", motivation1);
      formData.append("motivation2", motivation2);

      const res = await axios.post(
        "http://localhost:4000/application/addaplicant",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccessMessage("Successfully registered!");
      setErrorMessage("");

      setTimeout(() => {
        setSuccessMessage("");
        setFormData({
          username: "",
          email: "",
          password: "",
          orgName: "",
          phone: "",
          address: "",
          orgType: "",
          profilePicture: null,
          website: "",
          whyOrganizer: "",
          motivation1: "",
          motivation2: "",
        });
      }, 3000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        setErrorMessage(error.response.data.msg);
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg mt-3 mb-3">
        <h2 className="text-2xl font-bold text-center mb-8">Register</h2>
        {successMessage && (
          <div className="text-center text-green-500">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-center text-red-500">{errorMessage}</div>
        )}
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="mb-4">
            <h6 className="text-lg font-semibold m-2">Personal Information</h6>
            <div>
              <label htmlFor="orgName" className="block">
                Organizer/individual Name:
              </label>
              <input
                type="text"
                name="orgName"
                value={orgName}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Organization Name"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block">
                Phone:
              </label>
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Phone"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block">
                Address:
              </label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Address"
                required
              />
            </div>
            <div>
              <label htmlFor="orgType" className="block">
                Organizer Type:
              </label>
              <select
                name="orgType"
                value={orgType}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              >
                <option value="">Select Organizer Type</option>
                <option value="individual">Individual</option>
                <option value="organization">Organization</option>
                <option value="company">Company</option>
                <option value="government">Government</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label htmlFor="profilePicture" className="block">
                Profile Picture:
              </label>
              <input
                type="file"
                name="profilePicture"
                onChange={handleProfilePictureChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                accept="image/*"
                required
              />
            </div>
            <div>
              <label htmlFor="website" className="block">
                Website (Optional):
              </label>
              <input
                type="text"
                name="website"
                value={website}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Website (Optional)"
              />
            </div>
            <div>
              <label htmlFor="whyOrganizer" className="block">
                Why do you want to be an organizer?
              </label>
              <textarea
                name="whyOrganizer"
                value={whyOrganizer}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Tell us here..."
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="motivation1" className="block">
                What motivates you to organize events or campaigns?
              </label>
              <textarea
                name="motivation1"
                value={motivation1}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Tell us here..."
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="motivation2" className="block">
                What impact do you hope to make?
              </label>
              <textarea
                name="motivation2"
                value={motivation2}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Tell us here..."
                required
              ></textarea>
            </div>
          </div>
          {/* Login Information */}
          <div className="mb-4">
            <h6 className="text-lg font-semibold m-2">Login Information</h6>
            <div>
              <label htmlFor="username" className="block">
                Username:
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded"
            >
              Register
            </button>
          </div>
          <div className="text-center mt-4">
            Already have an account?{" "}
            <Link
              to="../login"
              className="font-medium text-green-600 hover:underline"
            >
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
