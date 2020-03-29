import React from "react";
import "./App.css";
import MyArray from "./components/MyArray/MyArray";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar></MenuBar>
      </header>
      <MyArray></MyArray>
    </div>
  );
}

export default App;
