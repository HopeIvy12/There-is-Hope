import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import QuestionPage from "../src/pages/QuestionPage";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutUsPage" element={<AboutPage />} />
      <Route path="/QuestionPage" element={<QuestionPage />} />
    </Routes>
  );
}
