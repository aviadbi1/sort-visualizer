import { activeComparison, changeValue, sortedCells } from "../redux/sort/actions";

/* Merge step of mergeSort */
async function merge(
  left: number[],
  right: number[],
  offset: number,
  dispatch: any,
  animationSpeed: number
) {
  const array: number[] = [];
  let lIndex = 0;
  let rIndex = 0;
  if (left.length + right.length > 3) {
    console.log("here");
  }
  while (lIndex + rIndex < left.length + right.length) {
    dispatch(activeComparison([offset + lIndex, offset + left.length + rIndex]));
    await new Promise(r => setTimeout(r, animationSpeed));

    const lItem = left[lIndex];
    const rItem = right[rIndex];
    const comparisonIndex = offset + array.length;
    // const lIndexWithOffset = offset + lIndex;
    // const rIndexWithOffset = offset + left.length + rIndex;
    if (lItem == null) {
      dispatch(changeValue(comparisonIndex, rItem));
      // await new Promise(r => setTimeout(r, animationSpeed));
      dispatch(sortedCells([comparisonIndex]));

      array.push(rItem);
      rIndex++;
    } else if (rItem == null) {
      dispatch(changeValue(comparisonIndex, lItem));
      // await new Promise(r => setTimeout(r, animationSpeed));
      dispatch(sortedCells([comparisonIndex]));

      array.push(lItem);
      lIndex++;
    } else if (lItem <= rItem) {
      dispatch(changeValue(comparisonIndex, lItem));
      // await new Promise(r => setTimeout(r, animationSpeed));
      dispatch(sortedCells([comparisonIndex]));
      array.push(lItem);
      lIndex++;
    } else {
      dispatch(changeValue(comparisonIndex, rItem));
      await new Promise(r => setTimeout(r, animationSpeed));
      dispatch(sortedCells([comparisonIndex]));

      array.push(rItem);
      rIndex++;
    }
  }
  console.warn(`iter finished ${left} ${right} ${array}`);
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
  numbers: Array<number>,
  dispatch: any,
  animationSpeed: number
) {
  return asyncMergeSort(numbers, 0, dispatch, animationSpeed);
}
