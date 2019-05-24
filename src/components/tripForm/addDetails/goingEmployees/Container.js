import { connect } from "react-redux";
import GoingEmployees from "./Component";
import { getAlreadyGoingEmployeesData } from "./../../../../features/tripsDetails/selectors";

const mapStateToProps = state => ({
  goingEmployees: getAlreadyGoingEmployeesData(state)
});

export default connect(mapStateToProps)(GoingEmployees);
