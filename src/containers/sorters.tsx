import { connect } from "react-redux";
import { chooseSorter } from "../redux/sort/actions";
import Sorters from "../components/Sorters/Sorters";
import { Dispatch, bindActionCreators } from "redux";
import { AppState } from "../redux";

const mapStateToProps = (state: AppState) => ({
  sort: state.sort
});

// "dispatch" argument needs an annotation to check the correct shape
//  of an action object when using dispatch function
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      chooseSorter: chooseSorter
    },
    dispatch
  );

const FilterSorters = connect(mapStateToProps, mapDispatchToProps)(Sorters);

export default FilterSorters;
