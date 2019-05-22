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
