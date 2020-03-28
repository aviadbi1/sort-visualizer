import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyArray from "./components/MyArray/MyArray";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <MyArray numbers={[4, 3, 2, 1, 1]}></MyArray>
      </header>
    </div>
  );
}

export default App;
