import React from "react";
import "./MyArrayValue.scss";

type MyArrayValueProps = {
  value: number;
  active: boolean;
  swap: boolean;
};

export function MyArrayValue(props: MyArrayValueProps) {
  let active = props.active ? "-active" : "";
  // let swap = props.swap ? "-swap" : "";
  return (
    <div className="chart">
      <div className={`bar${active}-${props.value}`}>{/* {props.value} */}</div>
    </div>
  );
}
