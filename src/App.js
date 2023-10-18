import Bill from "./Components/Bill";
import TipCalculator from "./Components/tipCalculator";
import FriendTipCalc from "./Components/friendTipCalc";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [tip, setTip] = useState(0);
  const [tip1, setTip1] = useState(0);

  function reset() {
    setAmount(0);
    setTip(0);
    setTip1(0);
  }

  return (
    <div className="App">
      <Bill amount={amount} setAmount={setAmount} />
      <TipCalculator tip={tip} setTip={setTip} />
      <FriendTipCalc tip1={tip1} setTip1={setTip1} />
      <DisplayMessage amount={amount} tip={tip} tip1={tip1} />
      <br></br>
      <button onClick={reset}>reset</button>
    </div>
  );
}

function DisplayMessage({ amount, tip, tip1 }) {
  const calcTip = (amount * tip) / 100;
  const calctip1 = (amount * tip1) / 100;
  const finalTip = (calcTip + calctip1) / 2;
  const total = finalTip + amount;
  return (
    <div>
      <h3>
        You Pay ${total} (${amount} + ${finalTip} tip)
      </h3>
    </div>
  );
}

export default App;
