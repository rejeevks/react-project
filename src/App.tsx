import JsRefresher from "./components/JsRefresher";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./App.css";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import { useState } from "react";

const DUMMY_DATA: { title: string; amount: number; date: Date }[] = [
  { title: "Books", amount: 200, date: new Date(2021, 11, 6) },
  { title: "Pens", amount: 250, date: new Date(2021, 0, 8) },
  { title: "Pencil", amount: 150, date: new Date(2021, 6, 24) },
  { title: "New Tv", amount: 7500, date: new Date(2021, 3, 22) },
];

const App = (props: any) => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense: any) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  };

  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="App">
      <h2>Typescript</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilterHandler={filterChangeHandler}
      />
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
};

export default App;
