export const createdTripStats = state => {
  const allMonths = {
    "01": 0,
    "02": 0,
    "03": 0,
    "04": 0,
    "05": 0,
    "06": 0,
    "07": 0,
    "08": 0,
    "09": 0,
    "10": 0,
    "11": 0,
    "12": 0
  };
  const { ids, byId } = state.trips;
  let months = [];
  let years = [];
  state.trips.ids.forEach(id => {
    const index = byId[id].departureDate.indexOf("-");
    const date = byId[id].departureDate.substr(index + 1, 2);
    months.push(date);
    const y = byId[id].departureDate.substr(0, 4);
    years.push(y);
  });
  for (let i = 0; i < months.length; i++) {
    if (state.filters.years === years[i]) {
      allMonths[months[i]]++;
    }
  }

  return {
    metrics: Object.keys(allMonths)
      .map(item => {
        return { label: item, y: allMonths[item] };
      })
      .sort(compare),
    years: years.filter(onlyUnique).sort()
  };
};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function compareYears(a, b) {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
}

function compare(a, b) {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
}
