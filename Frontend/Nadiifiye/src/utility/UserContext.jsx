import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const initialAuth = token ? JSON.parse(sessionStorage.getItem("user")) : null;

  const [auth, setAuth] = useState(!!initialAuth);
  const [user, setUser] = useState(initialAuth);

  const navigate = useNavigate();

  const login = async (userData) => {
    sessionStorage.setItem("user", JSON.stringify(userData));
    setAuth(true);
    setUser(userData);
    console.log("userData :>> ", userData.userType);
    navigateBasedOnUserType(userData.userType);
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    setAuth(false);
    setUser(null);
    navigate("/login");
  };

  const navigateBasedOnUserType = (userType) => {
    if (userType === "admin") {
      navigate("/admin");
    } else if (userType === "user") {
      navigate("/organizer");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (!token) {
      console.log("token :>> ", token);
      setAuth(false);
      setUser(null);
      // navigate("/");
    } else {
      const userData = JSON.parse(sessionStorage.getItem("user"));
      setUser(userData);
      navigateBasedOnUserType(userData.userType);
    }
  }, [token, navigate]);

  return (
    <AuthContext.Provider value={{ user, auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth, AuthContext };
