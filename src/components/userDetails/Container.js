import { connect } from "react-redux";
import Details from "./Component";

const mapStateToProps = state => {
  return {
    name: state.user.name,
    lastname: state.user.lastName,
    username: state.user.username
  };
};

export default connect(mapStateToProps)(Details);
