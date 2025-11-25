import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import DashBoard from "./DashBoard";
import Details from "./Details";
import Zero from "./Zero";
import Hello from "./Hello";
import Hi from "./Hi";
import Github from "./Github";


function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/DashBoard">DashBoard</Link>
        <Link to="/Details">Details</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/DashBoard" element={<DashBoard />} />

        <Route path="/Details" element={<Details />}>
          <Route index element={<Zero />} />
          <Route path="Hello" element={<Hello />} />
          <Route path="Hi" element={<Hi />} />
        </Route>
        <Route path="Github/:name" element={<Github></Github>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
