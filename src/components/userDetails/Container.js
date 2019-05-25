import { connect } from "react-redux";
import Details from "./Component";
import { getTripsByUserIdWithoutFilters } from "../../features/tripsDetails/selectors";

const mapStateToProps = state => {
  const data = getTripsByUserIdWithoutFilters(state, state.user.uuid);
  let cantGo = 0;
  let going = 0;
  let pending = 0;
  data.forEach(item => {
    if (item.cantGo) cantGo++;
    if (item.isApproved) going++;
    if (item.cantGo === false && item.isApproved === false) pending++;
  });
  return {
    name: state.user.name,
    lastname: state.user.lastName,
    username: state.user.username,
    cantGo,
    going,
    pending,
    total: cantGo + going + pending
  };
};

export default connect(mapStateToProps)(Details);
