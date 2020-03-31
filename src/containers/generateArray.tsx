import { connect } from "react-redux";
import { generateNewArray } from "../redux/sort/actions";
import { Dispatch, bindActionCreators } from "redux";
import { MIN_VALUE, MAX_VALUE } from "../redux/sort/constants";
import { AppState } from "../redux";
import GenerateArraySlider from "../components/GenerateArraySlider/GenerateArraySlider";

const mapStateToProps = (state: AppState) => ({
  MIN_VALUE,
  MAX_VALUE
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      generateNewArray: generateNewArray
    },
    dispatch
  );

const GenerateArray = connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateArraySlider);

export default GenerateArray;
