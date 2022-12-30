import React, { useState } from "react";
import "./App.css";
import InputGoals from "./componets/InputGoal/InputGoals";
import ListGoal from "./componets/ListGoals/ListGoal";

function App() {
  const [Goals, setGoals] = useState([
    { text: "finish this course", id: "e1" },
    { text: "become progrrmer", id: "e2" },
  ]);

  const enteredGoal = (entiredValue) => {
    setGoals((prev) => {
      const updateGoal = [...prev];
      updateGoal.unshift({ text: entiredValue, id: Math.random().toString() });
      return updateGoal;
    });
  };

  const delateGoals = (goalId) => {
    setGoals((prev) => {
      const goalDelete = prev.filter((goalid) => goalid.id !== goalId);
      return goalDelete;
    });
  };
  return (
    <div className="container">
      <InputGoals onAddGoal={enteredGoal} />
      <ListGoal GoalsValue={Goals} onDeleteItem={delateGoals} />
    </div>
  );
}

export default App;
