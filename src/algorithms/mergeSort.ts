import {
  activeComparison,
  changeValue,
  sortedCells,
  hideChangeValue,
  hideActiveComparison
} from "../redux/sort/actions";
import { ICell } from "../redux/sort/types";
import { wait } from "./utils";

function getActiveComparisonIndexes(
  lIndex: number,
  rIndex: number,
  leftLength: number,
  rightLength: number,
  offset: number
): Array<number> {
  let activeComparisonIndexes: Array<number> = [];
  if (lIndex < leftLength) {
    activeComparisonIndexes.push(offset + lIndex);
  }
  if (rIndex < rightLength) {
    activeComparisonIndexes.push(offset + leftLength + rIndex);
  }
  return activeComparisonIndexes;
}

/* Merge step of mergeSort */
async function merge(
  left: Array<number>,
  right: Array<number>,
  offset: number,
  dispatch: any,
  animationSpeed: number
) {
  const array: Array<number> = [];
  let lIndex = 0;
  let rIndex = 0;
  while (lIndex + rIndex < left.length + right.length) {
    let activeComparisonIndexes = getActiveComparisonIndexes(
      lIndex,
      rIndex,
      left.length,
      right.length,
      offset
    );
    dispatch(activeComparison(activeComparisonIndexes));
    await wait(animationSpeed);
    dispatch(hideActiveComparison(activeComparisonIndexes));

    const lItem = left[lIndex];
    const rItem = right[rIndex];
    const comparisonIndex = offset + array.length;

    if (lItem == null) {
      dispatch(changeValue(comparisonIndex, rItem));
      // await wait(animationSpeed);
      dispatch(hideChangeValue(comparisonIndex));

      dispatch(sortedCells([comparisonIndex]));
      array.push(rItem);
      rIndex++;
    } else if (rItem == null) {
      dispatch(changeValue(comparisonIndex, lItem));
      // await wait(animationSpeed);
      dispatch(hideChangeValue(comparisonIndex));

      dispatch(sortedCells([comparisonIndex]));
      array.push(lItem);
      lIndex++;
    } else if (lItem <= rItem) {
      dispatch(changeValue(comparisonIndex, lItem));
      // await wait(animationSpeed);
      dispatch(hideChangeValue(comparisonIndex));

      dispatch(sortedCells([comparisonIndex]));
      array.push(lItem);
      lIndex++;
    } else {
      dispatch(changeValue(comparisonIndex, rItem));
      await wait(animationSpeed);
      dispatch(hideChangeValue(comparisonIndex));

      dispatch(sortedCells([comparisonIndex]));
      array.push(rItem);
      rIndex++;
    }
  }
  return array;
}

async function asyncMergeSort(
  numbers: Array<number>,
  offset: number,
  dispatch: any,
  animationSpeed: number
): Promise<Array<number>> {
  if (numbers.length <= 1) {
    return numbers;
  }
  const middle = Math.floor(numbers.length / 2);
  const left = numbers.slice(0, middle);
  const right = numbers.slice(middle);

  const merged = await merge(
    await asyncMergeSort(left, offset, dispatch, animationSpeed),
    await asyncMergeSort(right, offset + middle, dispatch, animationSpeed),
    offset,
    dispatch,
    animationSpeed
  );
  return merged;
}

export async function mergeSort(
  cells: Array<ICell<number>>,
  dispatch: any,
  animationSpeed: number
) {
  const numbers = cells.map(c => c.value);
  return asyncMergeSort(numbers, 0, dispatch, animationSpeed);
}
