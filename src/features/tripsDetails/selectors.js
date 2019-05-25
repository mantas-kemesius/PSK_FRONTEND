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
  if (!state.trips.shouldConnect) return {};
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

export const getTripsByUserId = (state, userId) => {
  if (!state.tripDetails.relatedUserIds) return [];
  const { byId, relatedUserIds } = state.tripDetails;
  const tripDetailsIds = Object.keys(relatedUserIds).filter(
    id => relatedUserIds[id] === userId
  );
  return tripDetailsIds.map(id => ({
    trip: byId[id].trip,
    tripDetailsId: id,
    isApproved: byId[id].approvalMark
  }));
};

export const getAlreadyGoingEmployeesData = (state, tripId) => {
  if (!state.trips.shouldConnect) return [];
  const { byId } = state.tripDetails;
  const tripDetailsIds = getAllTripDetailsIdsByTripId(state);
  return tripDetailsIds.map(item => {
    const employee = byId[item].appUser;
    const context = byId[item].approvalMark
      ? "Patvirtino užklausą"
      : "Nepatvirtino užklausos";
    return {
      id: employee.uuid,
      label: `${employee.name} ${employee.lastName} - (${context})`
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
