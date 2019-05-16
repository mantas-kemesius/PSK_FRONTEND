import { connect } from "react-redux";
import Menu from "./Component";
import { signoutAndRemoveUser } from "./../../../features/user/actions";

const mapStateToProps = state => ({
  isAuth: !!state.user.isAuth
});

export default connect(
  mapStateToProps,
  {
    logout: signoutAndRemoveUser
  }
)(Menu);
