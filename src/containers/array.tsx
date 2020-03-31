import { connect } from "react-redux";
// import { generateNewArray } from "../redux/sort/actions";
// import { Dispatch, bindActionCreators } from "redux";
import { AppState } from "../redux";
import MyArray from "../components/MyArray/MyArray";

const mapStateToProps = (state: AppState) => ({
  sort: state.sort
});

// const mapDispatchToProps = (dispatch: Dispatch) =>
//   bindActionCreators(
//     {
//       generateNewArray: generateNewArray
//     },
//     dispatch
//   );

const ArrayState = connect(
  mapStateToProps,
  // mapDispatchToProps
)(MyArray);

export default ArrayState;
