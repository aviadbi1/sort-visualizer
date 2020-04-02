import { connect } from "react-redux";
import { chooseSorter, activeComparison, startSorting } from "../redux/sort/actions";
import Sorters from "../components/Sorters/Sorters";
import { Dispatch, bindActionCreators } from "redux";
import { AppState } from "../redux";
import { mergeSort } from "../algorithms/mergeSort";
import { bubbleSort } from "../algorithms/bubbleSort";

export type SortKindType = {
  name: string;
  func: any;
  title: string;
};

const mapStateToProps = (state: AppState) => {
  const sortKinds: Array<SortKindType> = [
    { name: "bubbleSort", func: bubbleSort, title: "Bubble Sort" },
    { name: "mergeSort", func: mergeSort, title: "Merge Sort" }
  ];
  return {
    sorter: state.sort.chosenSorter,
    sortKinds
  };
};

// "dispatch" argument needs an annotation to check the correct shape
//  of an action object when using dispatch function
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      chooseSorter,
      activeComparison,
      startSorting: () => startSorting(dispatch)
    },
    dispatch
  );

const FilterSorters = connect(mapStateToProps, mapDispatchToProps)(Sorters);

export default FilterSorters;
