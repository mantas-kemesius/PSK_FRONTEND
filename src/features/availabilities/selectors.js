export const selectUnavailableUserDatesByUserId = (state, userId) => {
  const { relatedUserIds, byId } = state.usersAvailabilities;
  const ids = Object.keys(relatedUserIds).filter(
    id => relatedUserIds[id] === userId
  );

  return ids.map(id => {
    return {
      start: new Date(byId[id].unavailableFrom),
      end: new Date(byId[id].unavailableTo)
    };
  });
};
