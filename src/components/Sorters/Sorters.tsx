import React from "react";
import "./Sorters.scss";

type SortersProps = {};

function Sorters(props: SortersProps) {
  return (
    <div className="sorters">
      <button>Bubble Sort</button>
      <button>Merge Sort</button>
      <button>Quick Sort</button>
    </div>
  );
}

export default Sorters;
