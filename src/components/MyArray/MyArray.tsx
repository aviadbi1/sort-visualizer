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
    this.setState({ numbers: this.props.numbers });
  }

  bubbleSort = () => {
    let arr = this.state.numbers;
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // swap arr[j+1] and arr[i]
          let temp = arr[j];
          arr[j] = arr[j + 1];
          this.setState({ numbers: arr });
          arr[j + 1] = temp;
          this.setState({ numbers: arr });
        }
      }
    }
  };

  render() {
    return (
      <div className="Array">
        <button className="button" onClick={this.bubbleSort}>
          Sort this bitch
        </button>
        <div>
          {this.props.numbers}
          <div>
            {this.state.numbers.map(n => (
              <MyArrayValue value={n}></MyArrayValue>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MyArray;
