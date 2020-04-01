import {
  swapCells,
  activeComparison,
  sortedCells
} from "../redux/sort/actions";

async function swap(
  arr: Array<number>,
  i: number,
  j: number,
  dispatch: any,
  animationSpeed: number
) {
  dispatch(swapCells());
  await new Promise(r => setTimeout(r, animationSpeed));

  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export async function bubbleSort(
  arr: Array<number>,
  dispatch: any,
  animationSpeed: number
) {
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
