// // Describing the shape of the chat's slice of state
// export interface Message {
//   user: string;
//   message: string;
//   timestamp: number;
// }

export type SortFunction = () => void;

export type ChooseSorterActionPayloadType = {
  readonly chosenSorter: string;
  readonly sortFunction: SortFunction;
};

export interface SortState {
  readonly chosenSorter: string;
  readonly sortFunction: SortFunction | undefined;
  readonly array: Array<number>;
}

// Describing the different ACTION NAMES available
export const CHOOSE_SORTER = "CHOOSE_SORTER";
export const GENERATE_NEW_ARRAY = "GENERATE_NEW_ARRAY";

interface ChooseSorterAction {
  type: typeof CHOOSE_SORTER;
  payload: ChooseSorterActionPayloadType;
}

interface GenerateNewArrayAction {
  type: typeof GENERATE_NEW_ARRAY;
  payload: Array<number>;
}

export type SortActionTypes = ChooseSorterAction | GenerateNewArrayAction;
