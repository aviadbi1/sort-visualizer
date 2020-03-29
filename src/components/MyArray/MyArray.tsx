import React, { Component } from "react";
import "./MyArray.scss";
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
    this.state = { numbers: [] };
  }

  componentDidMount() {
    this.setState({ numbers: [...this.props.numbers] }); // clone array
  }

  static getDerivedStateFromProps(props: MyArrayProps, state: MyArrayState) {
    if (props.numbers !== state.numbers) {
      return {
        // numbers: [...props.numbers]
        numbers: props.numbers
      };
    }
    // Return null to indicate no change to state.
    return null;
  }

  bubbleSort = async () => {
    let arr = this.state.numbers;
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          await this.swap(arr, j, j + 1);
        }
      }
    }
  };

  swap = async (arr: Array<number>, i: number, j: number) => {
    let temp = arr[i];
    arr[i] = arr[j];
    this.updateState(arr);
    arr[j] = temp;
    await this.updateState(arr);
  };

  updateState = async (arr: Array<number>) => {
    await new Promise(r => setTimeout(r, 500));
    this.setState({ numbers: arr });
  };

  render() {
    return (
      <div className="container">
        {/* <div>{this.props.numbers.toString()}</div> */}
        <div className="array">
          {this.state.numbers.map((n, index) => (
            <MyArrayValue active={false} key={index} value={n}></MyArrayValue>
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
