import React from "react";
import "./MyArrayValue.scss";

type MyArrayValueState = {
  value: number;
};

function MyArrayValue(props: MyArrayValueState) {
  return (
    <div className="chart">
      <div className={`bar-${props.value}`}>{/* {props.value} */}</div>
    </div>
  );
}

export default MyArrayValue;
