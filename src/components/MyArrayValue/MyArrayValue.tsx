import React from "react";
import "./MyArrayValue.scss";

type MyArrayValueProps = {
  value: number;
  active: boolean;
  swap: boolean;
  sortedAlready: boolean;
};

export function MyArrayValue(props: MyArrayValueProps) {
  let active = props.active ? "active" : "";
  let swap = props.swap ? "swap" : "";
  const sortedAlready = props.sortedAlready ? "sortedAlready" : ";";
  return (
    <div className="chart">
      <div className={`bar-${props.value} ${swap} ${active} ${sortedAlready}`}>
        {/* {props.value} */}
      </div>
    </div>
  );
}
