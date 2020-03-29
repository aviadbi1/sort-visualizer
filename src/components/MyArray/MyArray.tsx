import React, { useState, useEffect } from "react";
import "./MyArray.scss";
import MyArrayValue from "../MyArrayValue/MyArrayValue";

type MyArrayState = {
  numbers: Array<number>;
};

type MyArrayProps = {
  numbers: Array<number>;
};

function MyArray() {
  const [numbers, setNumbers] = useState<Array<number>>([4, 2]);
  const MIN = 1;
  const MAX = 100;

  useEffect(() => {});

  const generateNewArray = (numOfCells: number) => {
    let newArr = [];
    for (let i = 0; i < numOfCells; i++) {
      const val = Math.floor(MIN + Math.random() * MAX);
      newArr[i] = val;
    }
    setNumbers([...newArr]);
  };

  const bubbleSort = async () => {
    let arr = numbers;
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          await swap(arr, j, j + 1);
        }
      }
    }
  };

  const swap = async (arr: Array<number>, i: number, j: number) => {
    let temp = arr[i];
    arr[i] = arr[j];
    updateState(arr);
    arr[j] = temp;
    await updateState(arr);
  };

  const updateState = async (arr: Array<number>) => {
    await new Promise(r => setTimeout(r, 500));
    setNumbers([...arr]);
  };

  return (
    <div className="container">
      {/* <div>{this.props.numbers.toString()}</div> */}
      <div className="array">
        {numbers.map((n, index) => (
          <MyArrayValue active={false} key={index} value={n}></MyArrayValue>
        ))}
      </div>
      <button className="button" onClick={bubbleSort}>
        Sort this bitch
      </button>
    </div>
  );
}

export default MyArray;
