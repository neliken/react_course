import React from "react";

import "./ExpensesFilter.css";
import Card from "../UI/Card";
import "../UI/Card.css";

const ExpensesFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <Card>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={props.selected} onChange={dropDownChangeHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </Card>
  );
};

export default ExpensesFilter;
