import React from "react";
import { useState } from "react";
// QuestionPage.js	Manages question flow, stores answers, handles navigation
// ✅ Holds state for current question & answer
// Controls when to move to the next question

// ✅ Storing questions in an array.
// ✅ Keeping track of the current question index.
// ✅ Storing user responses (yes/no).
// ✅ Handling swipe gestures (left for "no", right for "yes").
// ✅ Navigating to the results page once all questions are answered.

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
  { id: 4, question: "Will you be travelling with a service animal?" },
  { id: 5, question: "Do you need accessible parking near the entrance?" },
  { id: 6, question: "Do you need a 24-hour reception available?" },
];

export default function QuestionPage() {
  //I want a function to go through my question
  //I need it to store the response of questions
  //it needs to track where i am to move through
  //We worry about three things:
  //how to move through the question
  //we are storing the reponse
  //we need to keep track of what question we are on
  //states

  // const [currentQuestion, setCurrentQuestion] = useState({});
    // Keeps track of the index we are at
  const [questionIndex, setQuestionIndex] = useState(0);
    // Stores user responses
  
  const [storeResponse, setStoreResponse] = useState([]);

  //the argument here is answer answer is the yes or no
  // Updates the responses list by adding the new answer along with the question ID.
  // It takes the existing responses (responses) and adds a new object { questionId, answer }.
  // questionId comes from the current question at questions[questionIndex].id.
  // Moves to the next question by increasing questionIndex by 1.

  function HandleQuestions(answer) {
    setStoreResponse([
      ...storeResponse,
      { questionsId: questions[questionIndex].id, answer },
    ]);
    setQuestionIndex(questionIndex + 1);
    // ensures the next question is displayed.
    //this take the answer and storees it in a new object
  }

  return (
    <>
      <p>{questions[questionIndex].question}</p>
      <button onClick={() => HandleQuestions("Yes")}>Yes</button>
      <button onClick={() => HandleQuestions("No")}>No</button>
    </>
  );
}
