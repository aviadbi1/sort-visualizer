import React from "react";
import { chooseSorter } from "../../redux/sort/actions";
import { SortState, SortFunction } from "../../redux/sort/types";
import "./Sorters.scss";

interface SortersProps {
  sort: SortState;
  chooseSorter: typeof chooseSorter;
}

function Sorters(props: SortersProps) {
  const bubbleSort: SortFunction = () => {
    console.log("bubble");
  };
  const mergeSort: SortFunction = () => {
    console.log("merge");
  };

  const sortKinds = [
    { name: "bubbleSort", func: bubbleSort, title: "Bubble Sort" },
    { name: "mergeSort", func: mergeSort, title: "Merge Sort" }
  ];

  const onClick = (kind: any) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.chooseSorter(event.currentTarget.id, kind.func);
  };

  return (
    <div className="sorters">
      {sortKinds.map((kind, index) => (
        <button key={index} id={kind.name} onClick={onClick(kind)}>
          {kind.title}
        </button>
      ))}
    </div>
  );
}

export default Sorters;
