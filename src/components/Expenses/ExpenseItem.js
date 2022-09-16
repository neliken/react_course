import React from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const click = () => {
  //   setTitle("New Title");
  //   console.log(title);
  // };

  return (
    // <div className="expense-item">
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={}>Click me!</button> */}
      </div>
    </Card>
    // </div>
  );
};

export default ExpenseItem;
