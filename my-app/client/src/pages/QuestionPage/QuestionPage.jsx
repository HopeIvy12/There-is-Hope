import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuestionPage.module.css"; // Import the CSS module

const questions = [
  {
    id: 1,
    question: "Do you need step-free access into and around the hotel?",
  },
  {
    id: 2,
    question:
      "Do you require a wheelchair-accessible bathroom (e.g., roll-in shower, grab bars)?",
  },
  {
    id: 3,
    question: "Do you need a ground-floor room or lift access to upper floors?",
  },
  { id: 4, question: "Will you be traveling with a service animal?" },
  { id: 5, question: "Do you need accessible parking near the entrance?" },
  { id: 6, question: "Do you need a 24-hour reception available?" },
];

export default function QuestionPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  // Tracks question number
  const [storeResponse, setStoreResponse] = useState([]);
  // Stores answers
  const navigate = useNavigate();
  // For navigation

  // Function to handle question responses
  function HandleQuestions(answer) {
    setStoreResponse([
      ...storeResponse,
      { questionId: questions[questionIndex].id, answer },
    ]);
    setQuestionIndex(questionIndex + 1);
    // Move to the next question
  }

  // Function to trigger text-to-speech
  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 1; // Normal speed
    speech.pitch = 1; // Normal pitch
    window.speechSynthesis.speak(speech);
  };

  // Navigate to results page after last question
  function HandleNavigation() {
    navigate("/ResultsPage", { state: { responses: storeResponse } });
  }

  return (
    <div className={styles.container}>
      {questionIndex < questions.length ? (
        <>
          <p className={styles.question}>{questions[questionIndex].question}</p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={() => HandleQuestions("Yes")}
            >
              Yes
            </button>
            <button
              className={styles.button}
              onClick={() => HandleQuestions("No")}
            >
              No
            </button>
            <button
              className={styles.speakButton}
              onClick={() => speakText(questions[questionIndex].question)}
            >
              🔊 Read Question
            </button>
          </div>
        </>
      ) : (
        <button className={styles.button} onClick={HandleNavigation}>
          Find your Results
        </button>
      )}
    </div>
  );
}
