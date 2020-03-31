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
