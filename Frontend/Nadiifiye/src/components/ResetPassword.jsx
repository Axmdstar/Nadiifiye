import React, { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function ResetPassword() {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const resetToken = searchParams.get("token");
  const [message, setMessage] = useState("");
  const { newPassword, confirmNewPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      await axios.post("/api/auth/reset-password/:token", {
        resetToken,
        newPassword,
      });
      setMessage(
        "Password successfully reset! You can now log in with your new password."
      );
    } catch (error) {
      setMessage("Failed to reset password. " + error.response.data);
    }
  };

  return (
    <div>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handleChange}
          placeholder="Enter new password"
          required
        />
        <input
          type="password"
          name="confirmNewPassword"
          value={confirmNewPassword}
          onChange={handleChange}
          placeholder="Confirm new password"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
