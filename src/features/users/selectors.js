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
