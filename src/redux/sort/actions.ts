import { action } from "typesafe-actions";

import { store } from "../../index";
import { MIN_VALUE, MAX_VALUE, ANIMATION_SPEED } from "./constants";
import {
  CHOOSE_SORTER,
  GENERATE_NEW_ARRAY,
  ACTIVE_COMPARISON,
  START_SORTING,
  SORTED_CELLS,
  SortFunction,
  CHANGE_VALUE,
  ICell,
  HIDE_CHANGE_VALUE,
  HIDE_ACTIVE_COMPARISON
} from "./types";
import { Dispatch } from "redux";
import { Cell } from "./cell";

export const chooseSorter = (sorter: string, func: SortFunction) =>
  action(CHOOSE_SORTER, { sorter, sortFunction: func });

export const activeComparison = (indexes: [number, number]) =>
  action(ACTIVE_COMPARISON, { comparisonIndexes: indexes });

export const hideActiveComparison = (indexes: [number, number]) =>
  action(HIDE_ACTIVE_COMPARISON, { comparisonIndexes: indexes });

export const generateNewArray = (newSize: number) => {
  let newArr: Array<ICell<number>> = [];
  for (let i = 0; i < newSize; i++) {
    const val = Math.floor(MIN_VALUE + Math.random() * (MAX_VALUE - MIN_VALUE));
    newArr[i] = new Cell(val);
  }
  return action(GENERATE_NEW_ARRAY, newArr);
};

export const changeValue = (i: number, val: number) => {
  return action(CHANGE_VALUE, { i, val });
};

export const hideChangeValue = (i: number) => {
  return action(HIDE_CHANGE_VALUE, i);
};

export const startSorting = (dispatch: Dispatch) => {
  const func = store.getState().sort.sortFunction;
  const arr = func(store.getState().sort.array, dispatch, ANIMATION_SPEED);
  console.table(arr);
  return action(START_SORTING, {});
};

export const sortedCells = (sortedCells: Array<number>) => {
  return action(SORTED_CELLS, sortedCells);
};
