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
    } catch (err) {
      alert("email ou senha incorreto(s)");
    }
  }

  return (
    <UserContext.Provider value={{ user, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, ContextProvider };
