import React from "react";
import "./GoalItem.css";

function GoalItem(props) {
  function DeleteHandler() {
    console.log(props.id);
    props.onDelete(props.id);
  }
  return (
    <div>
      <li>
        <div className="text" onClick={DeleteHandler}>
          {props.text}
        </div>
      </li>
    </div>
  );
}

export default GoalItem;
