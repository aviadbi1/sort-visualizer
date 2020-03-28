import React, { Component } from "react";
import "./App.css";
import MyArray from "./components/MyArray/MyArray";
import MenuBar from "./components/MenuBar/MenuBar";

type AppProps = {};
type AppState = {
  arr: Array<number>;
};
class App extends Component<AppProps, AppState> {
  MIN = 1;
  MAX = 10;

  constructor(props: AppProps) {
    super(props);
    this.state = { arr: [] };
  }

  componentDidMount() {
    this.setState({ arr: [4, 3, 2, 1, 1] });
  }

  generateNewArray = (numOfCells: number) => {
    let newArr = [];
    for (let i = 0; i < numOfCells; i++) {
      const val = Math.floor(this.MIN + Math.random() * this.MAX);
      newArr[i] = val;
    }
    this.setState({ arr: newArr });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MenuBar generateNewArray={this.generateNewArray}></MenuBar>
        </header>
        <MyArray numbers={this.state.arr}></MyArray>
      </div>
    );
  }
}

export default App;
