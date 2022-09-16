import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isShown, setIsShown] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };

    props.onSaveExpense(expenseData);
    setIsShown(false);
  };

  const handleClick = () => {
    setIsShown((curent) => !curent);
    // event.target.style.display = "none";
  };

  return (
    <div className="new-expense">
      {!isShown && <button onClick={handleClick}>Add new Expense</button>}
      {isShown && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={handleClick}
        />
      )}
    </div>
  );
};
export default NewExpense;
