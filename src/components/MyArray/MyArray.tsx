import React from "react";
import "./MyArray.scss";
import { MyArrayValue } from "../MyArrayValue/MyArrayValue";
import { SortState } from "../../redux/sort/types";

type MyArrayProps = {
  sort: SortState;
};

function MyArray(props: MyArrayProps) {
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
