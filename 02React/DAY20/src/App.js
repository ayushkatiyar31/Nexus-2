import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";          
import Header from "./Components/Header.js";
import Header from "./Components/FoodOption.js";
import Header from "./Components/FoodCard.js";

function App(){
  return (
    <>
      <Header></Header>
      <foodOptions></foodOptions>
      <Grocery></Grocery>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
