// AuthContext.js

import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('12345');
  const [usrType, setusrType] = useState('');


  return (
    <AuthContext.Provider value={{usrType, setusrType, auth, userName, userId, setAuth, setUserName, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
