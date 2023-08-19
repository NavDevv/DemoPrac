import ExpenseItem from "./components/expenseItem";

function App() {
  const exp = [
    { id: "1e", Title: "Car Insurance", Amount: 324.3, date: new Date(2023, 7, 17) },
    { id: "2e", Title: "Computer Desk", Amount: 232.24, date: new Date(2023, 7, 11) },
    { id: "3e", Title: "Paint Items", Amount: 123.3, date: new Date(2023, 7, 13) },
    { id: "4e", Title: "Gas stove", Amount: 566.3, date: new Date(2023, 7, 12) }
  ]


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={exp[0].Title} amount={exp[0].Amount} date={exp[0].date}></ExpenseItem>
      <ExpenseItem title={exp[1].Title} amount={exp[1].Amount} date={exp[1].date}></ExpenseItem>
      <ExpenseItem title={exp[2].Title} amount={exp[2].Amount} date={exp[2].date}></ExpenseItem>
      <ExpenseItem title={exp[3].Title} amount={exp[3].Amount} date={exp[3].date}></ExpenseItem>
    </div>
  );
}

export default App;

