import React from "react";
import "./MenuBar.scss";
import Sorters from "../Sorters/Sorters";
import GenerateArray from "../GenerateArray/GenerateArray";

type MenuBarProps = {};

function MenuBar(props: MenuBarProps) {
  return (
    <div className="menu">
      <GenerateArray></GenerateArray>
      <Sorters></Sorters>
      <button className="submitButton">Sort this Biatchh</button>
    </div>
  );
}

export default MenuBar;
