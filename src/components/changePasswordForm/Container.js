import { connect } from "react-redux";
import ChangePasswordForm from "./Component";
import { changePassword } from "./../../features/user/actions";

const mapStateToProps = state => {
  return {
    isAuth: state.user.isAuth
  };
};

export default connect(
  mapStateToProps,
  {
    handleClick: changePassword
  }
)(ChangePasswordForm);
