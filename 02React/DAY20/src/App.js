import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";          
import Header from "./Components/Header.js";

function App(){
  return (
    <>
      <Header />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
