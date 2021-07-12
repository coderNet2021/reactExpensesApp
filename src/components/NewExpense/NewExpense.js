import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const enrichedExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(enrichedExpenseData);
    props.onAddExpense(enrichedExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
