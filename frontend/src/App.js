import React, { useState } from "react";
import Routes from "./routes";
import { ContextProvider } from "./context/UserContext";
import "./global.css";

function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}

export default App;
