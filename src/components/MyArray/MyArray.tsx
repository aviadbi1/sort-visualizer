import React, { useState, useEffect } from "react";
import "./MyArray.scss";
import {
  MyArrayValue,
  MyArrayValueItemType
} from "../MyArrayValue/MyArrayValue";

type MyArrayState = {
  numbers: Array<number>;
};

type MyArrayProps = {
  numbers: Array<number>;
};

function MyArray() {
  const [numbers, setNumbers] = useState<Array<MyArrayValueItemType>>([
    { value: 40, active: false },
    { value: 70, active: false },
    { value: 50, active: false },
    { value: 10, active: false },
    { value: 20, active: false }
  ]);
  const MIN = 1;
  const MAX = 100;

  useEffect(() => {});

  // const generateNewArray = (numOfCells: number) => {
  //   let newArr = [];
  //   for (let i = 0; i < numOfCells; i++) {
  //     const val = Math.floor(MIN + Math.random() * MAX);
  //     newArr[i] = val;
  //   }
  //   setNumbers([...newArr]);
  // };

  const bubbleSort = async () => {
    let arr = numbers;
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j].value > arr[j + 1].value) {
          await swap(arr, j, j + 1);
        }
      }
    }
  };

  const swap = async (
    arr: Array<MyArrayValueItemType>,
    i: number,
    j: number
  ) => {
    await highlightChange(arr, i, j, true);

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    await highlightChange(arr, i, j, false);
  };

  const highlightChange = async (
    arr: Array<MyArrayValueItemType>,
    i: number,
    j: number,
    status: boolean
  ) => {
    arr[i].active = status;
    arr[j].active = status;
    await updateState(arr);
  };

  const updateState = async (arr: Array<MyArrayValueItemType>) => {
    await new Promise(r => setTimeout(r, 500));
    setNumbers([...arr]);
    console.table(numbers);
  };

  return (
    <div className="container">
      {/* <div>{this.props.numbers.toString()}</div> */}
      <div className="array">
        {numbers.map((item, index) => (
          <MyArrayValue item={item} key={index}></MyArrayValue>
        ))}
      </div>
      <button className="button" onClick={bubbleSort}>
        Sort this bitch
      </button>
    </div>
  );
}

export default MyArray;
