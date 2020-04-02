import { ICell } from "./types";

export class Cell implements ICell<number> {
  value: number;
  comparing: boolean;
  swapping: boolean;
  sorted: boolean;

  constructor(value: number) {
    this.value = value;
    this.comparing = false;
    this.swapping = false;
    this.sorted = false;
  }

  public setValue(value: number) {
    this.value = value;
  }

  public setComparing(comparing: boolean) {
    this.comparing = comparing;
  }
  public setSwapping(swapping: boolean) {
    this.swapping = swapping;
  }
  public setSorted(sorted: boolean) {
    this.sorted = sorted;
  }
}
