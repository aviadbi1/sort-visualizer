import {
  SortState,
  CHOOSE_SORTER,
  GENERATE_NEW_ARRAY,
  ACTIVE_COMPARISON,
  SWAP_CELLS,
  SORTED_CELLS,
  START_SORTING
} from "./types";

import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type SortAction = ActionType<typeof actions>;

const initialState: SortState = {
  chosenSorter: "",
  sortFunction: numbers => numbers,
  array: [40, 30, 20, 10],
  sortedCells: [],
  comparisonIndexes: [],
  shouldSwap: false,
  isRunning: false
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
        ...initialState,
        sortFunction: state.sortFunction,
        isRunning: false,
        finished: [],
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
    case SORTED_CELLS:
      const sortedCells = state.sortedCells.concat(action.payload);
      let shouldSwap = state.shouldSwap;
      let comparisonIndexes = state.comparisonIndexes;
      if (sortedCells.length === state.array.length) {
        shouldSwap = false;
        comparisonIndexes = [];
      }
      return {
        ...state,
        sortedCells,
        comparisonIndexes,
        shouldSwap
      };
    case START_SORTING:
      return {
        ...state,
        isRunning: true
      };
    default:
      return state;
  }
};

export default sortReducer;
