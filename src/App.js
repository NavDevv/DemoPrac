import { useState } from "react";

function App() {
  return <Step></Step>;
}

function Step() {
  let [step, setStep] = useState(1);
  let [count, setCount] = useState(0);
  let date = new Date("Oct 1 2023");
  date.setDate(date.getDate() + count);

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
        {count >= 1
          ? `${count} days from today is ${date.toDateString()}`
          : `${count} days ago was  ${date.toDateString()}`}
      </span>
    </div>
  );
}

export default App;
