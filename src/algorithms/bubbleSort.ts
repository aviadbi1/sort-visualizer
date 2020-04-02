import { activeComparison, sortedCells, changeValue } from "../redux/sort/actions";

async function swap(
  arr: Array<number>,
  i: number,
  j: number,
  dispatch: any,
  animationSpeed: number
) {
  let temp = arr[i];
  arr[i] = arr[j];
  dispatch(changeValue(i, arr[i]));
  arr[j] = temp;
  dispatch(changeValue(j, arr[j]));
  await new Promise(r => setTimeout(r, animationSpeed));
}

export async function bubbleSort(
  numbers: Array<number>,
  dispatch: any,
  animationSpeed: number
) {
  let arr = [...numbers];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      dispatch(activeComparison([j, j + 1]));
      await new Promise(r => setTimeout(r, animationSpeed));

      if (arr[j] > arr[j + 1]) {
        await swap(arr, j, j + 1, dispatch, animationSpeed);
      }
    }
    dispatch(sortedCells([n - i - 1]));
  }
  return arr;
}
