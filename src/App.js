import { useState } from "react";

function App() {
  return <FlashCards />;
}

export default App;

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with stat e?",
    answer: "Controlled element  ",
  },
];

function FlashCards() {
  const [selectedID, setSelectedID] = useState(null);
  function handleClick(id) {
    setSelectedID(id !== selectedID ? id : null);
  }
  return (
    <div className="flashcards">
      {questions.map((i) => (
        <div
          key={i.id}
          onClick={() => handleClick(i.id)}
          className={i.id === selectedID ? "selected" : ""}
        >
          <p>{i.id === selectedID ? i.answer : i.question}</p>
        </div>
      ))}
    </div>
  );
}
