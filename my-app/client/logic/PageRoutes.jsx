import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import AboutPage from "../src/pages/AboutPage/AboutPage";
import QuestionPage from "../src/pages/QuestionPage/QuestionPage";
import ResultsPage from "../src/pages/ResultsPage/ResultsPage";
import ProfilePage from "../src/pages/ProfilePage/Profile";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutUsPage" element={<AboutPage />} />
      <Route path="/QuestionPage" element={<QuestionPage />} />
      <Route path="/ResultsPage" element={<ResultsPage />} />
      <Route path="/Profile" element={<ProfilePage />} />
    </Routes>
  );
}
