import { connect } from "react-redux";
import Details from "./Component";
import { setEmployeesNotAvailableDates } from "./../../features/availabilities/actions";

export const getUnavailableDates = state => {
  const userId = state.user.uuid;
  if (!state.usersAvailabilities.relatedUserIds) return [];
  const ids = Object.keys(state.usersAvailabilities.relatedUserIds).filter(
    id => state.usersAvailabilities.relatedUserIds[id] === userId
  );
  const datesFromState = ids.map(id => ({
    from: state.usersAvailabilities.byId[id].unavailableFrom,
    to: state.usersAvailabilities.byId[id].unavailableTo
  }));
  let dates = [];
  datesFromState.forEach(obj => {
    dates = [...dates, ...generateRangeBetweenDates(obj.from, obj.to)];
  });
  return dates;
};

export const generateRangeBetweenDates = (startDate, endDate) => {
  const n = diffBetweenDates(startDate, endDate);
  const dates = [new Date(startDate)];
  for (let i = 1; i <= n; i++) {
    let dateInString = dates[i - 1].toISOString();
    dates.push(incrementOneDay(new Date(dateInString)));
  }
  dates.push(new Date(endDate));
  return dates;
};

export const incrementOneDay = currentDate => {
  currentDate.setDate(currentDate.getDate() + 1);
  return currentDate;
};

export const diffBetweenDates = (firstDate, secondDate) => {
  const date1 = new Date(firstDate);
  const date2 = new Date(secondDate);
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
};

const mapStateToProps = state => {
  return {
    unavailableDates: getUnavailableDates(state),
    id: state.user.uuid
  };
};

export default connect(
  mapStateToProps,
  { add: setEmployeesNotAvailableDates }
)(Details);
