import React from "react";
import "./MyArrayValue.scss";

type MyArrayValueState = {
  value: number;
  active: boolean;
};

function MyArrayValue(props: MyArrayValueState) {
  let active = props.active ? "-active" : "";
  return (
    <div className="chart">
      <div className={`bar${active}-${props.value}`}>{/* {props.value} */}</div>
    </div>
  );
}

export default MyArrayValue;
