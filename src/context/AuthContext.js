// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    const user = localStorage.getItem('authUser');
    return user ? JSON.parse(user) : null;
  });

  const [token, setToken] = useState(null);

  useEffect(() => {
    if (authUser) {
      localStorage.setItem('authUser', JSON.stringify(authUser));
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
