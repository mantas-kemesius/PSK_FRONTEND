import { connect } from "react-redux";
import ApartamentsForm from "./Component";
import { addApartament } from "./../../features/offices/actions";
import { getOfficesForSelectInput } from "./../../features/offices/selectors";

const mapStateToProps = state => ({
  offices: getOfficesForSelectInput(state)
});

export default connect(
  mapStateToProps,
  {
    add: addApartament
  }
)(ApartamentsForm);
