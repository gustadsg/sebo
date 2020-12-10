import React, { createContext, useState, useEffect } from "react";
import api from "../services/backend";

const defaultValues = {
  accessToken: null,
  userId: null,
  userAdmin: 0,
};

const UserContext = createContext(defaultValues);

function ContextProvider({ children }) {
  const [user, setUser] = useState(defaultValues);

  async function handleLogin(email, password) {
    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });
      setUser(data);
      // Save info in local storage
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userAdmin", data.userAdmin);
    } catch (err) {
      alert("email ou senha incorreto(s)");
    }
  }

  function loadSession() {
    // Get info from local storage
    const accessToken = localStorage.getItem("accessToken");
    
    const userAdmin = localStorage.getItem("userAdmin");
    return {accessToken, userAdmin}
  }

  return (
    <UserContext.Provider value={{ user, handleLogin, loadSession }}>
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, ContextProvider };
