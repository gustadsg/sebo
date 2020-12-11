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
      localStorage.setItem("userName", data.userName);
      alert("logado com sucesso. Bem vindo, " + data.userName[0]);
    } catch (err) {
      alert("email ou senha incorreto(s)");
    }
  }

  function setSession(user) {
    // Save info in local storage
    localStorage.setItem("accessToken", user.accessToken);
    localStorage.setItem("userAdmin", user.userAdmin);
    localStorage.setItem("userName", user.userName);
    // Save info in context
    setUser(user);
  }

  function loadSession() {
    // Get info from local storage
    const accessToken = localStorage.getItem("accessToken");

    const userAdmin = localStorage.getItem("userAdmin");
    return { accessToken, userAdmin };
  }

  function handleLogout() {
    localStorage.clear();
    setUser(defaultValues);
  }

  return (
    <UserContext.Provider
      value={{ user, handleLogin, setSession, loadSession, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, ContextProvider };
