import {
  selectEmployeeIds,
  isEmployeeAvailableByGivenDates
} from "../../features/users/selectors";

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
    return {
      hotelNeeded: false,
      apartament: false,
      carNeeded: false,
      ticketNeeded: false
    };

  const tripDetailsIds = getAllTripDetailsIdsByTripId(state);
  const details = tripDetailsIds.map(item => state.tripDetails.byId[item]);
  const tripDetail = details[0];
  return {
    carNeeded: tripDetail.carNeeded,
    hotelNeeded: tripDetail.hotelNeeded,
    ticketNeeded: tripDetail.ticketNeeded,
    apartament: !!tripDetail.officeApartament
  };
};

export const getTripsByUserId = (state, userId) => {
  if (!state.tripDetails.relatedUserIds) return [];
  const { byId, relatedUserIds } = state.tripDetails;
  const tripDetailsIds = Object.keys(relatedUserIds).filter(
    id => relatedUserIds[id] === userId
  );
  const data = tripDetailsIds.map(id => ({
    trip: byId[id].trip,
    tripDetailsId: id,
    isApproved: byId[id].approved,
    transport: byId[id].carNeeded ? "Automobilis" : "Lėktuvas",
    carNeeded: byId[id].carNeeded,
    ticketNeeded: byId[id].carNeeded,
    live: byId[id].hotelNeeded
      ? "Viešbutyje"
      : !!byId[id].officeApartment &&
        Object.keys(byId[id].officeApartment).length !== 0
      ? `Apartamentuose: ${byId[id].officeApartment.streetAddress}, numeris: ${
          byId[id].officeApartment.apartmentNumber
        }`
      : "",
    cantGo: !isEmployeeAvailableByGivenDates(
      state,
      byId[id].trip.departureDate,
      byId[id].trip.returnDate,
      userId
    )
  }));
  return data.filter(item => {
    const isAll = state.filters.activeFilter === "ALL";
    const isActive = state.filters.activeFilter === "ACTIVE";
    const isPending = state.filters.activeFilter === "PENDING";
    const isNotRelavant = state.filters.activeFilter === "NOT_RELAVANT";

    if (isAll) return true;
    if (isActive) return item.isApproved === true;
    if (isPending) return item.isApproved === false && item.cantGo === false;
    if (isNotRelavant) return item.cantGo === true;
  });
};

export const getTripsByUserIdWithoutFilters = (state, userId) => {
  if (!state.tripDetails.relatedUserIds) return [];
  const { byId, relatedUserIds } = state.tripDetails;
  const tripDetailsIds = Object.keys(relatedUserIds).filter(
    id => relatedUserIds[id] === userId
  );
  return tripDetailsIds.map(id => {
    return {
      trip: byId[id].trip,
      tripDetailsId: id,
      isApproved: byId[id].approved,
      transport: byId[id].carNeeded ? "Automobilis" : "Lėktuvas",
      live: byId[id].hotelNeeded
        ? "Viešbutyje"
        : !!byId[id].officeApartment &&
          Object.keys(byId[id].officeApartment).length !== 0
        ? `Apartamentuose: ${byId[id].officeApartment.streetAddress}, ${
            byId[id].officeApartment.apartmentNumber
          }`
        : "",
      cantGo: !isEmployeeAvailableByGivenDates(
        state,
        byId[id].trip.departureDate,
        byId[id].trip.returnDate,
        userId
      )
    };
  });
};

export const getAlreadyGoingEmployeesData = (state, tripId) => {
  if (!state.trips.shouldConnect) return [];
  const { byId } = state.tripDetails;
  const tripDetailsIds = getAllTripDetailsIdsByTripId(state);
  return tripDetailsIds.map(item => {
    const employee = byId[item].appUser;
    const context = byId[item].approved
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
