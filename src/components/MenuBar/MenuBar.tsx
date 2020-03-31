import React from "react";
import "./MenuBar.scss";
import GenerateArray from "../../containers/generateArray";
import FilterSorters from "../../containers/sorters";

type MenuBarProps = {};

function MenuBar(props: MenuBarProps) {
  return (
    <div className="menu">
      <GenerateArray></GenerateArray>
      <FilterSorters></FilterSorters>
    </div>
  );
}

export default MenuBar;
