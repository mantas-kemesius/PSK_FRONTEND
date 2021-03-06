import { connect } from "react-redux";
import Menu from "./Component";
import { signoutAndRemoveUser } from "./../../../features/user/actions";

const mapStateToProps = state => ({
  isAuth: !!state.user.isAuth,
  isVisible:
    !!state.user &&
    !!state.user.userRoleEnumList &&
    (state.user.userRoleEnumList.indexOf("ADMINISTRATOR") !== -1 ||
      state.user.userRoleEnumList.indexOf("ORGANIZATOR") !== -1)
});

export default connect(
  mapStateToProps,
  {
    logout: signoutAndRemoveUser
  }
)(Menu);
