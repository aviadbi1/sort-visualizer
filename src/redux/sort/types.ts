// // Describing the shape of the chat's slice of state
// export interface Message {
//   user: string;
//   message: string;
//   timestamp: number;
// }

export type SortFunction = (numbers: Array<number>) => void;

export type ChooseSorterActionPayloadType = {
  readonly chosenSorter: string;
  readonly sortFunction: SortFunction;
};

export type ActiveComparisonActionPayloadType = {
  readonly comparisonIndexes: [number, number];
  readonly shouldSwap: boolean;
};

// Describe the state
export interface SortState {
  readonly chosenSorter: string;
  readonly sortFunction: SortFunction | undefined;
  readonly array: Array<number>;
  readonly comparisonIndexes: [number, number];
  readonly shouldSwap: boolean;
}

// Describing the different ACTION NAMES available
export const CHOOSE_SORTER = "CHOOSE_SORTER";
export const GENERATE_NEW_ARRAY = "GENERATE_NEW_ARRAY";
export const ACTIVE_COMPARISON = "ACTIVE_COMPARISON";
export const START_SORTING = "START_SORTING";

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
  payload: ActiveComparisonActionPayloadType;
}

interface StartSortingAction {
  type: typeof START_SORTING;
  payload: {};
}

export type SortActionTypes =
  | ChooseSorterAction
  | GenerateNewArrayAction
  | ActiveComparisonAction
  | StartSortingAction;
