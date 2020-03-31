import { action, Action } from "typesafe-actions";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { AppState } from "../index";
import { store } from "../../index";
import { MIN_VALUE, MAX_VALUE } from "./constants";
import {
  CHOOSE_SORTER,
  GENERATE_NEW_ARRAY,
  ACTIVE_COMPARISON,
  SWAP_CELLS,
  START_SORTING,
  SortFunction
} from "./types";

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

export const startSorting = () => {
  const func = store.getState().sort.sortFunction;
  const arr = func(store.getState().sort.array);
  console.table(arr);
  return action(START_SORTING, {});
};
