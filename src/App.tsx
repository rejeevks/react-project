import JsRefresher from "./components/JsRefresher";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./App.css"
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses: { title: string; amount: number; date: Date }[] = [
    { title: "Books", amount: 200, date: new Date(2021, 11, 6) },
    { title: "Pens", amount: 250, date: new Date(2021, 0, 8)},
    { title: "Pencil", amount: 150, date: new Date(2021, 6, 24) },
    { title: "New Tv", amount: 7500, date: new Date(2021, 3, 22) },
  ];

  return (
    <Card className="App">
      <h2>Typescript</h2>
      <NewExpense/>
      {expenses.map((expense, i) => {
        return (
          <ExpenseItem
            key={i}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
      {/* <JsRefresher/> */}
    </Card>
  );
}

export default App;
