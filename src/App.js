import React from "react";
import Expenses from "./components/expenses";
import NewExpense from "./NewComponents/NewExpense";


function App() {
  const exp = [
    { id: "1e", Title: "Car Insurance", Amount: 324.3, date: new Date(2023, 7, 17) },
    { id: "2e", Title: "Computer Desk", Amount: 232.24, date: new Date(2023, 7, 11) },
    { id: "3e", Title: "Paint Items", Amount: 123.3, date: new Date(2023, 7, 13) },
    { id: "4e", Title: "Gas stove", Amount: 566.3, date: new Date(2023, 7, 12) }
  ]


  return (
    <div>
      <NewExpense />
      <Expenses items={exp} />
    </div>
  );
}

export default App;

