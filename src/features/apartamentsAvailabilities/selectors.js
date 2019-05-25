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

export const isPossibleToSelectApartament = state => {
  const officeId = state.offices.destinationOfficeId;
  if (!officeId) return [];
  const apartamentId = getApartamentIdByOfficeId(state, officeId);
  const datesFromState = getUnavailableDatesByApartamentId(state, apartamentId);
  const selectedDates = {
    start: new Date(state.apartamentsAvailabilities.dates.from),
    end: new Date(state.apartamentsAvailabilities.dates.till)
  };
  let dates = [];
  datesFromState.forEach(obj => {
    dates = [...dates, { start: new Date(obj.from), end: new Date(obj.to) }];
  });
  return !isPeriodOverlaps(selectedDates, dates);
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

export const generateRangeBetweenDates = (startDate, endDate) => {
  const n = diffBetweenDates(startDate, endDate);
  const dates = [new Date(startDate)];
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
