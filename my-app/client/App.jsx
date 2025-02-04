// import { useState } from "react";
// import reactLogo from "/assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router } from "react-router-dom";
// React Router to define the routes for different pages and include the Navbar component.
import "./style/App.css";
import PageRoutes from "./logic/PageRoutes";
import NavBar from "./src/components/NavBar";


export default function App() {
  return (
    <Router>
      <>
        <NavBar />
        <PageRoutes />
      </>
    </Router>
  );
}
