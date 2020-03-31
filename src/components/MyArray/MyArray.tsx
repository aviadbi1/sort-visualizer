import React from "react";
import "./MyArray.scss";
import { MyArrayValue } from "../MyArrayValue/MyArrayValue";
import { SortState } from "../../redux/sort/types";

type MyArrayProps = {
  sort: SortState;
};

function MyArray(props: MyArrayProps) {
  // const swap = async (
  //   arr: Array<MyArrayValueItemType>,
  //   i: number,
  //   j: number
  // ) => {
  //   await highlightChange(arr, i, j, true);

  //   let temp = arr[i];
  //   arr[i] = arr[j];
  //   arr[j] = temp;

  //   await highlightChange(arr, i, j, false);
  // };

  // const highlightChange = async (
  //   arr: Array<MyArrayValueItemType>,
  //   i: number,
  //   j: number,
  //   status: boolean
  // ) => {
  //   arr[i].active = status;
  //   arr[j].active = status;
  //   await updateState(arr);
  // };

  // const updateState = async (arr: Array<MyArrayValueItemType>) => {
  //   await new Promise(r => setTimeout(r, 500));
  //   setNumbers([...arr]);
  //   console.table(numbers);
  // };

  return (
    <div className="container">
      <div className="array">
        {props.sort.array.map((number, index) => {
          let active = props.sort.comparisonIndexes.indexOf(index) !== -1;
          let swap = active && props.sort.shouldSwap;
          return (
            <MyArrayValue
              key={index}
              active={active}
              swap={swap}
              value={number}
            ></MyArrayValue>
          );
        })}
      </div>
    </div>
  );
}

export default MyArray;
