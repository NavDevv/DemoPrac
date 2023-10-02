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
  function StepInc() {
    setStep(step + 1);
  }
  function StepDec() {
    setStep(step - 1);
  }

  function CountInc() {
    setCount((c) => c + step);
  }
  function CountDec() {
    setCount((c) => c - step);
  }

  return (
    // adding the buttons and putting onClick Props
    <div>
      <button onClick={StepInc}>+</button>
      <span>Step: {step}</span>
      <button onClick={StepDec}>-</button>
      <br></br>
      <button onClick={CountInc}>+</button>
      <span>Count: {count}</span>
      <button onClick={CountDec}>-</button>
      <br />
      <span>
        {/* Printing the changed date according to the count state */}
        {count >= 1
          ? `${count} days from today is ${date.toDateString()}`
          : `${count} days ago was  ${date.toDateString()}`}
      </span>
    </div>
  );
}

export default App;
