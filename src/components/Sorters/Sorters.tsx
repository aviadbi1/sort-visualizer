import React, { useState } from "react";
import {
  chooseSorter,
  swapCells,
  activeComparison
} from "../../redux/sort/actions";
import "./Sorters.scss";
import { SortKindType } from "../../containers/sorters";

interface SortersProps {
  sorter: string;
  sortKinds: Array<SortKindType>;
  chooseSorter: typeof chooseSorter;
  activeComparison: typeof activeComparison;
  swapCells: typeof swapCells;
  startSorting: any;
}

function Sorters(props: SortersProps) {
  const [sorterName, setSorterName] = useState("");

  const chooseSorter = (kind: any) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const chosenSorterName = event.currentTarget.id;
    setSorterName(chosenSorterName);
    props.chooseSorter(chosenSorterName, kind.func);
    document
      .getElementsByClassName("sorterButton active")
      .item(0)
      ?.classList.remove("active");
    document.getElementById(chosenSorterName)?.classList.add("active");
  };

  const submit = () => {
    if (sorterName === "") {
      alert("Choose a FUCKING sorter");
    } else {
      props.startSorting();
    }
  };

  return (
    <>
      <div className="sorters">
        {props.sortKinds.map((kind, index) => (
          <button
            key={index}
            id={kind.name}
            className="sorterButton"
            onClick={chooseSorter(kind)}
          >
            {kind.title}
          </button>
        ))}
      </div>
      <button className="submitButton" onClick={submit}>
        Sort this Biatchh
      </button>
    </>
  );
}

export default Sorters;
