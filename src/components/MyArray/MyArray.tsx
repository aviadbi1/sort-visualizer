import React, { Component } from "react";
import "./MyArray.css";
import MyArrayValue from "../MyArrayValue/MyArrayValue";

type MyArrayState = {
  numbers: Array<number>;
};

type MyArrayProps = {
  numbers: Array<number>;
};

class MyArray extends Component<MyArrayProps, MyArrayState> {
  constructor(props: MyArrayProps) {
    super(props);
    console.log(props.numbers);
    this.state = { numbers: [] };
  }

  componentDidMount() {
    this.setState({ numbers: [...this.props.numbers] }); // clone array
  }

  updateState = async (arr: Array<number>) => {
    await new Promise(r => setTimeout(r, 1000));
    this.setState({ numbers: arr });
  };

  bubbleSort = async () => {
    let arr = this.state.numbers;
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // swap arr[j+1] and arr[i]
          let temp = arr[j];
          arr[j] = arr[j + 1];
          this.updateState(arr);
          arr[j + 1] = temp;
          await this.updateState(arr);
        }
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div>{this.props.numbers}</div>
        <div className="array">
          {this.state.numbers.map((n, index) => (
            <MyArrayValue key={index} value={n}></MyArrayValue>
          ))}
        </div>
        <button className="button" onClick={this.bubbleSort}>
          Sort this bitch
        </button>
      </div>
    );
  }
}

export default MyArray;
