import {
  activeComparison,
  sortedCells,
  changeValue,
  hideChangeValue,
  hideActiveComparison
} from "../redux/sort/actions";
import { ICell } from "../redux/sort/types";

async function swap(
  arr: Array<ICell<number>>,
  i: number,
  j: number,
  dispatch: any,
  animationSpeed: number
) {
  let temp = arr[i].value;
  // arr[i].value = arr[j].value;
  dispatch(changeValue(i, arr[j].value));
  // arr[j].value = temp;
  dispatch(changeValue(j, temp));
  await new Promise(r =>
    setTimeout(() => {
      r(() => {
        dispatch(hideChangeValue(i));
        dispatch(hideChangeValue(j));
      });
    }, animationSpeed)
  );
}

export async function bubbleSort(
  numbers: Array<ICell<number>>,
  dispatch: any,
  animationSpeed: number
) {
  let arr = [...numbers];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      dispatch(activeComparison([j, j + 1]));
      // await new Promise(r => setTimeout(r, animationSpeed));
      await new Promise(r =>
        setTimeout(() => {
          r(() => {
            dispatch(hideActiveComparison([j, j + 1]));
          });
        }, animationSpeed)
      );
      if (arr[j].value > arr[j + 1].value) {
        await swap(arr, j, j + 1, dispatch, animationSpeed);
      }
    }
    dispatch(sortedCells([n - i - 1]));
  }
  return arr;
}
