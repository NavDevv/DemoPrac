import { useState } from "react";

function App() {
  return <Step></Step>;
}

function Step() {
  //States and updating States
  // Date Features - copied from the net
  let [step, setStep] = useState(1);
  let [count, setCount] = useState(0);
  let date = new Date("Oct 1 2023");
  date.setDate(date.getDate() + count);

  // Functions for the adding and subtraction
  function CountInc() {
    setCount((c) => c + step);
  }
  function CountDec() {
    setCount((c) => c - step);
  }
  function ClickHandler() {
    setStep(1);
    setCount(0);
  }

  return (
    // adding the buttons and putting onClick Props
    <div>
      <input
        type="range"
        min={1}
        max={10}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      ></input>
      <p>{step}</p>
      <button onClick={CountInc}>+</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      ></input>
      <button onClick={CountDec}>-</button>
      <br></br>

      <span>
        {/* Printing the changed date according to the count state */}
        {count >= 1
          ? `${count} days from today is ${date.toDateString()}`
          : `${count} days ago was  ${date.toDateString()}`}
      </span>
      <br></br>
      <button onClick={ClickHandler}>Reset</button>
    </div>
  );
}

export default App;
