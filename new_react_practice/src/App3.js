import React, { useState, useEffect, useRef } from "react";
import Hello from "./Components/Hello";
import "./app.css";

function App() {
  const [number, setNumber] = useState(0);

  const input = useRef(null);

  const changePlaceHolder = () => {
    input.current.placeholder = "youtube";
  };
  return (
    <div className="App">
      {number}{" "}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increase Number
      </button>{" "}
      <input type="text" placeholder="testing" ref={input}></input>
      <button onClick={changePlaceHolder}>Change Placeholder</button>
    </div>
  );
}

export default App;
