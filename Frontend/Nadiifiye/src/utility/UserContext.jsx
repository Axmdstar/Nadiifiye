import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [usrType, setusrType] = useState("");

  const login = (username, userType) => {
    setAuth(true);
    setUserName(username);
    setusrType(userType);

    // Store authentication data in Local Storage
    localStorage.setItem(
      "userAuth",
      JSON.stringify({
        auth,
        userName,
        userId,
        usrType,
      })
    );
  };

  // Retrieve data from Local Storage on component mount
  useEffect(() => {
    const userAuth = localStorage.getItem("userAuth");
    if (userAuth) {
      const { auth, userName, userId, usrType } = JSON.parse(userAuth);
      setAuth(auth);
      setUserName(userName);
      setUserId(userId);
      setusrType(usrType);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        usrType,
        setusrType,
        auth,
        userName,
        userId,
        setAuth,
        setUserName,
        setUserId,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
