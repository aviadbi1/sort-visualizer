import { activeComparison, swapCells } from "../redux/sort/actions";

/* Merge step of mergeSort */
async function merge(left: number[], right: number[], offset: number) {
  const array: number[] = [];
  let lIndex = 0;
  let rIndex = 0;
  while (lIndex + rIndex < left.length + right.length) {
    activeComparison([offset + lIndex, offset + left.length + rIndex]);
    await new Promise(r => setTimeout(r, 300));

    const lItem = left[lIndex];
    const rItem = right[rIndex];
    if (lItem == null) {
      array.push(rItem);
      rIndex++;
    } else if (rItem == null) {
      array.push(lItem);
      lIndex++;
    } else if (lItem <= rItem) {
      array.push(lItem);
      lIndex++;
    } else {
      swapCells();
      await new Promise(r => setTimeout(r, 300));
      array.push(rItem);
      rIndex++;
    }
  }
  // console.warn(`iter finished ${left} ${right} ${array}`);
  return array;
}

async function asyncMergeSort(
  numbers: Array<number>,
  offset: number
): Promise<Array<number>> {
  if (numbers.length <= 1) {
    return numbers;
  }
  const middle = Math.floor(numbers.length / 2);
  const left = numbers.slice(0, middle);
  const right = numbers.slice(middle);

  return merge(
    await asyncMergeSort(left, offset),
    await asyncMergeSort(right, offset + middle),
    offset
  );
}

export function mergeSort(numbers: Array<number>) {
  let res = [...numbers];
  (async () => {
    res = await asyncMergeSort(numbers, 0);
    console.log(res);
  })();
  return res;
}
