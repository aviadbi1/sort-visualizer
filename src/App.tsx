import React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar/MenuBar";
import ArrayState from "./containers/array";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar></MenuBar>
      </header>
      <ArrayState></ArrayState>
    </div>
  );
}

export default App;
