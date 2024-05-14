import React, { useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../utility/UserContext";

function Login() {
  // user info
  const { setAuth, setUserName, setUserId, userId, setusrType } =
    useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { email, password } = formData;

  console.log(userId);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:4000/auth/login", {
          email: email,
          password: password,
        })
        .then(({ data }) => {
          // Show success toast
          toast.success("Logged successfully");
          setAuth(true);
          setUserName(data.user.username);
          setUserId(data.user._id);
          setusrType(data.user.userType);

          if (data.user.userType == "user") {
            navigate("/organizer");
          } else {
            navigate("/");
          }
        });
      // const { setAuth, setUserName, setUserId, userId } = useAuth();
    } catch (error) {
      console.error(
        "Login error",
        error.response ? error.response.data : "Error"
      );
      // Here you could set an error state and display it to the user
      toast.error("Login error. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
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
          <div className="flex justify-between items-center">
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded"
              >
                Sign in
              </button>
            </div>
            <div>
              <Link
                to="./forgot-password"
                className="font-medium text-sm text-green-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
