import {
  SortState,
  CHOOSE_SORTER,
  GENERATE_NEW_ARRAY,
  ACTIVE_COMPARISON,
  SWAP_CELLS,
  START_SORTING
} from "./types";

import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type SortAction = ActionType<typeof actions>;

const initialState: SortState = {
  chosenSorter: "",
  sortFunction: numbers => numbers,
  array: [40, 30, 10, 20],
  comparisonIndexes: [-1, -1],
  shouldSwap: false
};

const bubbleSort = (numbers: Array<number>) => {
  let arr = numbers;
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

const swap = (arr: Array<number>, i: number, j: number) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const sort = (state: SortState) => {
  const arr = bubbleSort(state.array);
  return arr;
};

const sortReducer = (state = initialState, action: SortAction) => {
  console.log(action);
  switch (action.type) {
    case CHOOSE_SORTER:
      return {
        ...state,
        chosenSorter: action.payload.sorter,
        sortFunction: action.payload.sortFunction
      };
    case GENERATE_NEW_ARRAY:
      return {
        ...state,
        array: [...action.payload]
      };
    case ACTIVE_COMPARISON:
      return {
        ...state,
        comparisonIndexes: action.payload.comparisonIndexes,
        shouldSwap: false
      };
    case SWAP_CELLS:
      return {
        ...state,
        shouldSwap: true
      };
    case START_SORTING:
      // const arr = sort(state);
      return {
        ...state
        // array: [...arr]
      };
    default:
      return state;
  }
};

export default sortReducer;
