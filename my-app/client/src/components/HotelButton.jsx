import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../pages/HomePage.module.css";

export default function HotelButton() {
  const navigate = useNavigate();

  function HandleClick() {
    navigate("/QuestionPage");
  }

  return (
    <button className={styles.button} onClick={HandleClick}>
      Find Hotels
    </button>
  );
}
