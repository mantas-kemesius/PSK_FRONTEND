import { connect } from "react-redux";
import LoginForm from "./Component";
import { authenticate } from "./../../features/user/actions";

const mapStateToProps = state => {
  return {
    isAuth: state.user.isAuth
  };
};

export default connect(
  mapStateToProps,
  {
    auth: authenticate
  }
)(LoginForm);
