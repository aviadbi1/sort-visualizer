import React from "react";
import "./MyArrayValue.scss";

type MyArrayValueProps = {
  value: number;
  active: boolean;
  swap: boolean;
  // finished: boolean;
};

export function MyArrayValue(props: MyArrayValueProps) {
  let active = props.active ? "active" : "";
  let swap = props.swap ? "swap" : "";

  return (
    <div className="chart">
      <div className={`bar-${props.value} ${swap} ${active}`}>
        {/* {props.value} */}
      </div>
    </div>
  );
}
