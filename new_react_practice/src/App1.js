import React, { useState } from "react";
import Hello from "./Components/Hello";
import "./app.css";

function App() {
  const [firstName, setFirstName] = useState("john");
  const usern = "rutu";
  const pass = "123";

  const [usernState, setUsernState] = useState("");
  const [passState, setPassState] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  function login() {
    if (usernState === usern && passState === pass) {
      setLoggedIn(true);
    }
  }

  return (
    <div className="App">
      <Hello myname="rutu" />
      <Hello />
      <Hello />
      {firstName}{" "}
      <button
        onClick={() => {
          setFirstName("rutu");
        }}
      >
        Change name
      </button>
      <h1>Login</h1>
      <input
        type="text"
        onChange={(event) => {
          setUsernState(event.target.value);
        }}
      />
      <input
        type="password"
        onChange={(event) => {
          setPassState(event.target.value);
        }}
      />
      <button onClick={login}>Submit</button>
      {loggedIn && <h1>Logged In</h1>}
    </div>
  );
}

export default App;
