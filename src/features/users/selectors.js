import { selectUnavailableUserDatesByUserId } from "../availabilities/selectors";
import { getTripsByUserId } from "../tripsDetails/selectors";

export const getOrganizatorsForSelectInput = ({ users }) => {
  const { byId, ids } = users;
  const organizators = ids.filter(item => {
    const organizator = byId[item];
    return organizator.userRoleEnumList.indexOf("ORGANIZATOR") !== -1;
  });
  return organizators.map(item => {
    const organizator = byId[item];
    return {
      id: organizator.uuid,
      label: `${organizator.name} ${organizator.lastName}`
    };
  });
};

export const selectEmployeeIds = state => {
  const { ids, byId } = state.users;
  return ids.filter(item => {
    const employee = byId[item];
    return (
      employee.userRoleEnumList.indexOf("EMPLOYEE") !== -1 &&
      isEmployeeAvailable(state, item)
    );
  });
};

export const isEmployeeAvailableByGivenDates = (
  state,
  start,
  end,
  employeeId
) => {
  const selectedDates = {
    start: new Date(start),
    end: new Date(end)
  };

  const periods = selectUnavailableUserDatesByUserId(state, employeeId);

  return !isPeriodOverlaps(selectedDates, periods);
};

export const isEmployeeAvailable = (state, employeeId) => {
  const selectedDates = {
    start: new Date(state.apartamentsAvailabilities.dates.from),
    end: new Date(state.apartamentsAvailabilities.dates.till)
  };

  const periods = selectUnavailableUserDatesByUserId(state, employeeId);

  return !isPeriodOverlaps(selectedDates, periods);
};

export const isPeriodOverlaps = (testPeriod, periods) => {
  for (var i = 0; i < periods.length; i++) {
    var period = periods[i];
    if (period.start < testPeriod.start && period.end > testPeriod.start)
      return true;
    if (period.start > testPeriod.start && period.start < testPeriod.end)
      return true;
  }

  return false;
};
