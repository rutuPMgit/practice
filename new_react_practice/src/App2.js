import React, { useState } from "react";
import Hello from "./Components/Hello";
import "./app.css";

function App() {
  const [showHeader, setShowHeader] = useState(false);

  const [name, setName] = useState("");
  const [listOfNames, setListOfNames] = useState([]);
  return (
    <div className="App">
      <button onClick={() => setShowHeader(true)}>Show Header</button>
      {showHeader ? <h1>Hello</h1> : <h1>No Hello</h1>}

      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setListOfNames([...listOfNames, name]);
          setListOfNames("");
        }}
      >
        Add Name
      </button>
    </div>
  );
}

export default App;
