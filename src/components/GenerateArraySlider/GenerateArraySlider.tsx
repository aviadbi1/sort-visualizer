import React, { ChangeEvent, useState } from "react";
import { generateNewArray } from "../../redux/sort/actions";
import "./GenerateArraySlider.scss";

type GenerateArrayProps = {
  generateNewArray: typeof generateNewArray;
  MIN_VALUE: number;
  MAX_VALUE: number;
};

function GenerateArraySlider(props: GenerateArrayProps) {
  const [value, setValue] = useState(50);

  const sliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value);
    props.generateNewArray(newSize);
    setValue(newSize);
  };

  return (
    <div className="sliderContainer">
      <input
        type="range"
        min={props.MIN_VALUE}
        max={props.MAX_VALUE}
        value={value}
        className="slider"
        id="myRange"
        onChange={sliderChange}
      />
    </div>
  );
}

export default GenerateArraySlider;
