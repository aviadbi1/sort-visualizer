import { SortState, CHOOSE_SORTER, GENERATE_NEW_ARRAY } from "./types";

import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type SortAction = ActionType<typeof actions>;

const initialState: SortState = {
  chosenSorter: "",
  sortFunction: undefined,
  array: [4, 3, 1, 2]
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
    default:
      return state;
  }
};

export default sortReducer;
