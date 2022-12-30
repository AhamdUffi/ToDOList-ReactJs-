import React from "react";
import GoalItem from "./GoalItem";
import "./ListGoal.css";

function ListGoal(props) {
  return (
    <div>
      <ul className="list-goal">
        {props.GoalsValue.map((goal) => (
          <GoalItem
            key={goal.id}
            text={goal.text}
            id={goal.id}
            onDelete={props.onDeleteItem}
          ></GoalItem>
        ))}
      </ul>
    </div>
  );
}

export default ListGoal;
