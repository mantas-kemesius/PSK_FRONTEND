import { connect } from "react-redux";
import TopButtons from "./Component";

const mapStateToProps = state => ({
  isVisible:
    !!state.user &&
    !!state.user.userRoleEnumList &&
    (state.user.userRoleEnumList.indexOf("ADMINISTRATOR") !== -1 ||
      state.user.userRoleEnumList.indexOf("ORGANIZATOR") !== -1)
});

export default connect(mapStateToProps)(TopButtons);
