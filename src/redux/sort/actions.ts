import { action } from "typesafe-actions";

import { MIN_VALUE, MAX_VALUE } from "./constants";
import { CHOOSE_SORTER, GENERATE_NEW_ARRAY, SortFunction } from "./types";

export const chooseSorter = (sorter: string, func: SortFunction) =>
  action(CHOOSE_SORTER, { sorter, sortFunction: func });

export const generateNewArray = (newSize: number) => {
  let newArr = [];
  for (let i = 0; i < newSize; i++) {
    const val = Math.floor(MIN_VALUE + Math.random() * MAX_VALUE);
    newArr[i] = val;
  }
  return action(GENERATE_NEW_ARRAY, newArr);
};
