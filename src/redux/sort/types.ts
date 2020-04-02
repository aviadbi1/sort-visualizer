// // Describing the shape of the chat's slice of state
// export interface Message {
//   user: string;
//   message: string;
//   timestamp: number;
// }

export type SortFunction = (
  arr: Array<number>,
  dispatch: any,
  animationSpeed: number
) => Array<number>;

export type ChooseSorterActionPayloadType = {
  readonly chosenSorter: string;
  readonly sortFunction: SortFunction;
};

// Describe the state
export interface SortState {
  readonly chosenSorter: string;
  readonly sortFunction: SortFunction;
  readonly array: Array<number>;
  readonly sortedCells: Array<number>;
  readonly comparisonIndexes: Array<number>;
  readonly shouldSwap: boolean;
  readonly isRunning: boolean;
}

// Describing the different ACTION NAMES available
export const CHOOSE_SORTER = "CHOOSE_SORTER";
export const GENERATE_NEW_ARRAY = "GENERATE_NEW_ARRAY";
export const ACTIVE_COMPARISON = "ACTIVE_COMPARISON";
export const CHANGE_VALUE = "CHANGE_VALUE";
export const START_SORTING = "START_SORTING";
export const SORTED_CELLS = "SORTED_CELLS";

interface ChooseSorterAction {
  type: typeof CHOOSE_SORTER;
  payload: ChooseSorterActionPayloadType;
}

interface GenerateNewArrayAction {
  type: typeof GENERATE_NEW_ARRAY;
  payload: Array<number>;
}

interface ActiveComparisonAction {
  type: typeof ACTIVE_COMPARISON;
  payload: Array<number>;
}

interface ChangeValueAction {
  type: typeof CHANGE_VALUE;
  payload: { i: number; val: number };
}

interface StartSortingAction {
  type: typeof START_SORTING;
  payload: {};
}

interface SortedCellsAction {
  type: typeof SORTED_CELLS;
  payload: Array<number>;
}

export type SortActionTypes =
  | ChooseSorterAction
  | GenerateNewArrayAction
  | ActiveComparisonAction
  | ChangeValueAction
  | StartSortingAction
  | SortedCellsAction;
