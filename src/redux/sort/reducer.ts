import {
  SortState,
  CHOOSE_SORTER,
  GENERATE_NEW_ARRAY,
  ACTIVE_COMPARISON,
  START_SORTING
} from "./types";

import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type SortAction = ActionType<typeof actions>;

const initialState: SortState = {
  chosenSorter: "",
  sortFunction: undefined,
  array: [4, 3, 1, 2],
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
        ...state,
        array: [...action.payload]
      };
    case ACTIVE_COMPARISON:
      return {
        ...state,
        comparisonIndexes: action.payload.comparisonIndexes,
        shouldSwap: action.payload.shouldSwap
      };
    case START_SORTING:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default sortReducer;
