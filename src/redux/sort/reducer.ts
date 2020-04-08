import {
  SortState,
  CHOOSE_SORTER,
  GENERATE_NEW_ARRAY,
  ACTIVE_COMPARISON,
  CHANGE_VALUE,
  SORTED_CELLS,
  START_SORTING,
  HIDE_ACTIVE_COMPARISON,
  HIDE_CHANGE_VALUE
} from "./types";

import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type SortAction = ActionType<typeof actions>;

const initialState: SortState = {
  chosenSorter: "",
  sortFunction: cells => cells,
  array: [],
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
        array: [...action.payload]
      };
    case ACTIVE_COMPARISON:
      action.payload.comparisonIndexes.forEach(i => {
        state.array[i].comparing = true;
        state.array[i].swapping = false;
        state.array[i].sorted = false;
      });
      return { ...state };
    case HIDE_ACTIVE_COMPARISON:
      action.payload.comparisonIndexes.forEach(i => {
        state.array[i].comparing = false;
        state.array[i].swapping = false;
      });
      return { ...state };
    case CHANGE_VALUE:
      state.array[action.payload.i].setValue(action.payload.val);
      state.array[action.payload.i].comparing = false;
      state.array[action.payload.i].swapping = true;
      state.array[action.payload.i].sorted = false;
      return { ...state };
    case HIDE_CHANGE_VALUE:
      state.array[action.payload].comparing = false;
      state.array[action.payload].swapping = false;
      return { ...state };
    case SORTED_CELLS:
      action.payload.forEach(i => {
        state.array[i].comparing = false;
        state.array[i].swapping = false;
        state.array[i].sorted = true;
      });
      return { ...state };
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
