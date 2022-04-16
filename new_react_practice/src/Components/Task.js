import React from "react";
import "../app.css";

export default function Task({ taskName, time }) {
  return (
    <div className="task">
      <h1>Task Name : {taskName}</h1>
      <h1>Time To Complete: {time}</h1>
    </div>
  );
}
