import React, { useState } from "react";
import Button from "../UI/Button/Button";
import "./InputGoals.css";

function InputGoals(props) {
  const [entiredValue, setEntiredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  function InputHandler(event) {
    if (entiredValue.trim().length > -1) {
      setIsValid(true);
    }
    setEntiredValue(event.target.value);
  }

  function SubmitHandler(event) {
    event.preventDefault();
    if (entiredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(entiredValue);
    setEntiredValue("");
    event.target[0].value = "";
  }

  return (
    <div className="form">
      <form
        action="#"
        className={`form-control ${!isValid ? "invalid" : ""}`}
        onSubmit={SubmitHandler}
      >
        <label htmlFor="text">Course Goals</label>
        <input type="text" id="text" onChange={InputHandler} />
        <Button type="submit">ADD BUTTON</Button>
      </form>
    </div>
  );
}

export default InputGoals;
