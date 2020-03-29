import React from "react";
import "./MyArrayValue.scss";

type MyArrayValueProps = {
  item: MyArrayValueItemType;
};

export type MyArrayValueItemType = {
  value: number;
  active: boolean;
};

export function MyArrayValue(props: MyArrayValueProps) {
  let active = props.item.active ? "-active" : "";
  return (
    <div className="chart">
      <div className={`bar${active}-${props.item.value}`}>
        {/* {props.value} */}
      </div>
    </div>
  );
}
