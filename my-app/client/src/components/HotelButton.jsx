import React from "react";
import { useNavigate } from "react-router-dom";

export default function HotelButton() {
  const navigate = useNavigate();

  function HandleClick() {
    navigate("/QuestionPage");
  };

  return <button onClick={HandleClick}>Find Hotels</button>;
}
