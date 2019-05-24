import { selectEmployeeIds } from "../../features/users/selectors";

export const getAvailableEmployeesForSelectInput = state => {
  const { byId } = state.users;
  const employeeIds = selectEmployeeIds(state);
  const availableEmployees = employeeIds.map(item => {
    const employee = byId[item];
    if (checkOrValidEmployee(state, employee.uuid)) {
      return {
        id: employee.uuid,
        label: `${employee.name} ${employee.lastName}`
      };
    }
  });
  return availableEmployees.filter(item => item !== undefined);
};

export const getTripDetails = state => {
  const emplIds = getAlreadyGoingEmployeesIds(state);
  if (emplIds.length === 0 && !state.trips.additionalTripId)
    return { hotel: false, apartament: false, car: false, ticket: false };

  const tripDetailsIds = getAllTripDetailsIdsByTripId(state);
  const details = tripDetailsIds.map(item => state.tripDetails.byId[item]);
  const tripDetail = details[0];
  return {
    car: tripDetail.car,
    hotel: tripDetail.hotel,
    ticket: tripDetail.ticket,
    apartament: !!tripDetail.officeApartament
  };
};

export const getAlreadyGoingEmployeesData = (state, tripId) => {
  const { byId } = state.tripDetails;
  const tripDetailsIds = getAllTripDetailsIdsByTripId(state);
  return tripDetailsIds.map(item => {
    const employee = byId[item].appUser;
    return {
      id: employee.uuid,
      label: `${employee.name} ${employee.lastName}`
    };
  });
};

export const getAlreadyGoingEmployeesIds = state => {
  const going = getAlreadyGoingEmployeesData(state);
  return going.map(item => item.id);
};

const checkOrValidEmployee = (state, employeeId) =>
  getAlreadyGoingEmployeesIds(state).indexOf(employeeId) === -1;

export const getAllTripDetailsIdsByTripId = state => {
  const { relatedTripIds } = state.tripDetails;
  const tripId = state.trips.additionalTripId;
  return Object.keys(relatedTripIds).filter(
    tripDetailsId => relatedTripIds[tripDetailsId] === tripId
  );
};
