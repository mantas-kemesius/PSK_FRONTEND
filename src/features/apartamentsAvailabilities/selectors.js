import { getApartamentIdByOfficeId } from "../officeApartaments/selectors";

export const getUnavailableDates = state => {
  const officeId = state.offices.destinationOfficeId;
  if (!officeId) return;
  const apartamentId = getApartamentIdByOfficeId(state, officeId);
  const datesFromState = getUnavailableDatesByApartamentId(state, apartamentId);
  let dates = [];
  datesFromState.forEach(obj => {
    dates = [...dates, ...generateRangeBetweenDates(obj.from, obj.to)];
  });
  return dates;
};

export const diffBetweenDates = (firstDate, secondDate) => {
  const date1 = new Date(firstDate);
  const date2 = new Date(secondDate);
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const generateRangeBetweenDates = (startDate, endDate) => {
  const n = diffBetweenDates(startDate, endDate);
  const dates = [new Date(startDate)];
  console.log(dates);
  for (let i = 1; i < n; i++) {
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

export const getUnavailableDatesByApartamentId = (state, id) => {
  const ids = selectUnavailabilitiesIds(state, id);
  const { byId } = state.apartamentsAvailabilities;
  let dates = [];
  if (ids.length === 0) return dates;

  return ids.map(id => {
    return {
      from: byId[id].unavailableFrom,
      to: byId[id].unavailableTo
    };
  });
};

export const selectUnavailabilitiesIds = (state, apartamentId) => {
  const { relatedApartamentsIds } = state.apartamentsAvailabilities;
  return Object.keys(relatedApartamentsIds).filter(
    id => relatedApartamentsIds[id] === apartamentId
  );
};
