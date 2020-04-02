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
        {props.sort.array.map((cell, index) => {
          return (
            <MyArrayValue
              key={index}
              active={cell.comparing}
              swap={cell.swapping}
              sortedAlready={cell.sorted}
              value={cell.value}
            ></MyArrayValue>
          );
        })}
      </div>
    </div>
  );
}

export default MyArray;
