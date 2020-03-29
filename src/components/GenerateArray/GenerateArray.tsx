import React, { ChangeEvent } from "react";
import "./GenerateArray.scss";

type GenerateArrayProps = {};

function GenerateArray(props: GenerateArrayProps) {
  let value = "50";

  const sliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    value = event.target.value;
    console.log(parseInt(value));
  };

  return (
    <div className="sliderContainer">
      <input
        type="range"
        min="4"
        max="100"
        value={value}
        className="slider"
        id="myRange"
        onChange={sliderChange}
      />
    </div>
  );
}

export default GenerateArray;
