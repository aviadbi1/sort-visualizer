export interface ICell<T> {
  value: T;
  comparing: boolean;
  swapping: boolean;
  sorted: boolean;
  setValue: (val: T) => void;
  setComparing: (comparing: boolean) => void;
  setSwapping: (swapping: boolean) => void;
  setSorted: (sorted: boolean) => void;
}

export type SortFunction = (
  arr: Array<ICell<number>>,
  dispatch: any,
  animationSpeed: number
) => Array<ICell<number>>;

export type ChooseSorterActionPayloadType = {
  readonly chosenSorter: string;
  readonly sortFunction: SortFunction;
};

// Describe the state
export interface SortState {
  readonly chosenSorter: string;
  readonly sortFunction: SortFunction;
  readonly array: Array<ICell<number>>;
  readonly isRunning: boolean;
}

// Describing the different ACTION NAMES available
export const CHOOSE_SORTER = "CHOOSE_SORTER";
export const GENERATE_NEW_ARRAY = "GENERATE_NEW_ARRAY";
export const ACTIVE_COMPARISON = "ACTIVE_COMPARISON";
export const HIDE_ACTIVE_COMPARISON = "HIDE_ACTIVE_COMPARISON";
export const CHANGE_VALUE = "CHANGE_VALUE";
export const HIDE_CHANGE_VALUE = "HIDE_CHANGE_VALUE";
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

interface HideActiveComparisonAction {
  type: typeof HIDE_ACTIVE_COMPARISON;
  payload: Array<number>;
}

interface ChangeValueAction {
  type: typeof CHANGE_VALUE;
  payload: { i: number; val: number };
}
interface HideChangeValueAction {
  type: typeof HIDE_CHANGE_VALUE;
  payload: number;
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
  | HideActiveComparisonAction
  | ChangeValueAction
  | HideChangeValueAction
  | StartSortingAction
  | SortedCellsAction;
