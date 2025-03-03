import React from "react";
import { Link } from "react-router-dom";
import styles from "../pages/HomePage/HomePage.module.css";
//import "react-router-dom"
//The Link component from react-router-dom is used to create links in React.

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutUsPage">About us Page</Link>
        </li>
        <li>
          <Link to="/QuestionPage">Question Page</Link>
        </li>
        <li>
          <Link to="/Profile">Your Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
