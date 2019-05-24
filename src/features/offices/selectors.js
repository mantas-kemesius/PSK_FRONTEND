export const getOfficesForSelectInput = ({ offices }) => {
  const { byId, ids } = offices;
  return ids.map(item => {
    const office = byId[item];
    return {
      id: office.uuid,
      label: `${office.country}, ${office.city}, ${office.streetAddress}`
    };
  });
};

export const getDestinationsForSelectInput = ({ offices }) => {
  const { byId, ids, selectedTripStartId } = offices;
  const officeWithLabels = ids.map(item => {
    const office = byId[item];
    return {
      id: office.uuid,
      label: `${office.country}, ${office.city}, ${office.streetAddress}`
    };
  });
  return officeWithLabels.filter(item => item.id !== selectedTripStartId);
};
