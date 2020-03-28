import React from "react";
import "./MyArrayValue.css";

type MyArrayValueState = {
  value: number;
};

function MyArrayValue(props: MyArrayValueState) {
  return <div className="bar">{props.value}</div>;
}

export default MyArrayValue;
