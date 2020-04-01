import React, { useState } from "react";
import {
  chooseSorter,
  startSorting,
  swapCells,
  activeComparison
} from "../../redux/sort/actions";
import { SortState, SortFunction } from "../../redux/sort/types";
import "./Sorters.scss";

interface SortersProps {
  sort: SortState;
  chooseSorter: typeof chooseSorter;
  activeComparison: typeof activeComparison;
  swapCells: typeof swapCells;
  startSorting: typeof startSorting;
}

function Sorters(props: any) {
  const [sorterName, setSorterName] = useState("");
  const bubbleSort: SortFunction = async (numbers: Array<number>) => {
    let arr = numbers;
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        props.activeComparison([j, j + 1]);
        await new Promise(r => setTimeout(r, 300));
        if (arr[j] > arr[j + 1]) {
          await swap(arr, j, j + 1);
        }
      }
    }
  };

  const swap = async (arr: Array<number>, i: number, j: number) => {
    props.swapCells();
    await new Promise(r => setTimeout(r, 400));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const mergeSort: SortFunction = async (numbers: Array<number>) => {
    console.log("merge");
  };

  const sortKinds = [
    { name: "bubbleSort", func: bubbleSort, title: "Bubble Sort" },
    { name: "mergeSort", func: mergeSort, title: "Merge Sort" }
  ];

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
        {sortKinds.map((kind, index) => (
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
