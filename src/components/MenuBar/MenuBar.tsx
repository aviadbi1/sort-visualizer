import React from "react";
import "./MenuBar.scss";
import Sorters from "../Sorters/Sorters";
import GenerateArray from "../GenerateArray/GenerateArray";

type MenuBarProps = {
  generateNewArray(numberOfCells: number): void;
};

function MenuBar(props: MenuBarProps) {
  return (
    <div className="menu">
      <GenerateArray generateNewArray={props.generateNewArray}></GenerateArray>
      <Sorters></Sorters>
      <button className="submitButton">Sort this Biatchh</button>
    </div>
  );
}

export default MenuBar;
