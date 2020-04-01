import { action } from "typesafe-actions";

import { store } from "../../index";
import { MIN_VALUE, MAX_VALUE, ANIMATION_SPEED } from "./constants";
import {
  CHOOSE_SORTER,
  GENERATE_NEW_ARRAY,
  ACTIVE_COMPARISON,
  SWAP_CELLS,
  START_SORTING,
  SORTED_CELLS,
  SortFunction
} from "./types";
import { Dispatch } from "redux";

export const chooseSorter = (sorter: string, func: SortFunction) =>
  action(CHOOSE_SORTER, { sorter, sortFunction: func });

export const activeComparison = (indexes: [number, number]) =>
  action(ACTIVE_COMPARISON, { comparisonIndexes: indexes });

export const generateNewArray = (newSize: number) => {
  let newArr = [];
  for (let i = 0; i < newSize; i++) {
    const val = Math.floor(MIN_VALUE + Math.random() * (MAX_VALUE - MIN_VALUE));
    newArr[i] = val;
  }
  return action(GENERATE_NEW_ARRAY, newArr);
};

export const swapCells = () => {
  console.log("swap");
  return action(SWAP_CELLS, {});
};

export const startSorting = (dispatch: Dispatch) => {
  const func = store.getState().sort.sortFunction;
  const arr = func(store.getState().sort.array, dispatch, ANIMATION_SPEED);
  console.table(arr);
  return action(START_SORTING, {});
};


export const sortedCells = (sortedCells:Array<number>) => {
  return action(SORTED_CELLS, sortedCells);
};