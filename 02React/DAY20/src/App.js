import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import "./index.css";
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router-dom";

 



// Header section: Let's build it

function App(){
    
    return(
       <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
       
       </Routes>
       </BrowserRouter>
      
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



// Proxy server "https://cors-anywhere.herokuapp.com/"; 


