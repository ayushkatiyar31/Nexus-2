import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import DashBoard from "./DashBoard";
import Details from "./Details";
import Zero from "./Zero";
import Hello from "./Hello";
import Hi from "./Hi";
import Github from "./Github";

// Layout for navbar + nested routes
function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/DashBoard">DashBoard</Link>
        <Link to="/Details">Details</Link>
      </nav>

      <Outlet /> {/* All pages render here */}
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      {/* Routes */}
      <Route index element={<Home />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="DashBoard" element={<DashBoard />} />

      <Route path="Details" element={<Details />}>
        <Route index element={<Zero />} />
        <Route path="Hello" element={<Hello />} />
        <Route path="Hi" element={<Hi />} />
      </Route>

      <Route path="Github/:name" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
