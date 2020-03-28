import React from "react";
import "./MyArrayValue.scss";

type MyArrayValueState = {
  value: number;
};

function MyArrayValue(props: MyArrayValueState) {
  return (
    <div className="chart">
      <div className={`bar-${props.value}`}>{props.value}</div>
      {/* <div className="chart">
        <div className="bar-45"></div>
        <div className="bar-100"></div>
        <div className="bar-63"></div>
        <div className="bar-11"></div>
        <div className="bar-46"></div>
        <div className="bar-88"></div>
        <div className="bar-35"></div>
        <div className="bar-11"></div>
        <div className="bar-78"></div>
        <div className="bar-91"></div>
        <div className="bar-55"></div>
        <div className="bar-16"></div>
      </div> */}
    </div>
  );
}

export default MyArrayValue;
