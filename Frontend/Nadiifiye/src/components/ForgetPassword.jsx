import React, { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make sure to replace the URL with the correct endpoint from your backend
      const response = axios.post(
        "http://localhost:3000/api/auth/forgot-password",
        { email }
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error(
        "Error sending forgot password request:",
        error.response ? error.response.data : error.message
      );
      setMessage(
        error.response ? error.response.data.message : "An error occurred"
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Forgot Your Password?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your email address and we will send you a link to reset your
            password.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Send Reset Link
          </button>
        </form>
        {message && (
          <div className="text-center mt-4 text-sm font-semibold text-green-600">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
