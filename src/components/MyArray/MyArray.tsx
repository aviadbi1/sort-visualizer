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

  render() {
    return (
      <div className="Array">
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
