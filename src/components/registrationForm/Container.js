import { connect } from "react-redux";
import RegisterForm from "./Component";
import { register } from "./../../features/user/actions";

const mapStateToProps = state => {
  return {
    isAuth: state.user.isAuth
  };
};

export default connect(
  mapStateToProps,
  {
    handleClick: register
  }
)(RegisterForm);
