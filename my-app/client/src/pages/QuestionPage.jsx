import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuestionPage.module.css"; // Import the CSS module

// QuestionPage.js	Manages question flow, stores answers, handles navigation
// ✅ Holds state for current question & answer
// ✅ Controls when to move to the next question
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
  //we are storing the response
  //we need to keep track of what question we are on
  //states

  // const [storeAnswer, setStoreAnswer] = useState({});
  // Keeps track of the index we are at
  const [questionIndex, setQuestionIndex] = useState(0);
  // Stores user responses

  const [storeResponse, setStoreResponse] = useState([]);
  const ResultsPage = useNavigate();
  //the argument here is answer answer is the yes or no
  // Updates the responses list by adding the new answer along with the question ID.
  // It takes the existing responses (responses) and adds a new object { questionId, answer }.
  // questionId comes from the current question at questions[questionIndex].id.
  // Moves to the next question by increasing questionIndex by 1.
  //I need to update what is at index [questionIdex] with the question updated with the answer
  //youre state will be in the state as all the qiestions will be answered at the correct index
  //two aarrays with empty questiosn unaswered, 2nd array that is empty and you push at the end
  //you answered one you push that into the array
  //the state has changed
  // copy of og array push my answers in into a new array
  //which wil update the state with question and answer now

  //not everything sio true but some things are tue
  //array, do they have all th attruites
  //awaiting, addition info
  //assign a nuimerical value to the attrubtes
  //will have a heavier waiting
  //if they have sum up all the att by their weight score

  //hotel{id:, toilet: boolean(3)}
  //need to create a mapping from answers to the hotel attr
  //all side feature you need a weight
  //all you find all wheelchairs true and you asign a weigh to that
  //could store the weight in the question
  //anytime you find that wheelchair is false , you still include them they would just be ranked lower.

  //Chatgbt how would yopu rank items in a list by weight
  //thinking about a data stuture
  //then think about the current state is and what the next state should be

  function HandleQuestions(answer) {
    setStoreResponse([
      ...storeResponse,
      { questionsId: questions[questionIndex].id, answer },
    ]);

    //answer represents the answer yes or no
    //storeResponse state, which is an array that stores the user's responses
    //reates a new object with two properties Id of the current question
    //and the answer(yes or no as a paramemter)
    //the next object store response
    setQuestionIndex(questionIndex + 1);
    // ensures the next question is displayed.
    //this take the answer and storees it in a new object
  }

  function HandleNavigation() {
    ResultsPage("/ResultsPage", { state: { responses: storeResponse } });
  }
  return (
    <div className={styles.container}>
      {questionIndex < questions.length ? (
        <>
          <p className={styles.question}>{questions[questionIndex].question}</p>
          <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => HandleQuestions("Yes")}>Yes</button>
          <button className={styles.button} onClick={() => HandleQuestions("No")}>No</button>
        </div></>
      ) : (
        <button className={styles.button} onClick={HandleNavigation}>
          Find your Results
        </button>
      )}
    </div>
  );
}
