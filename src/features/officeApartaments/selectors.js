export const getApartamentIdByOfficeId = (state, officeId) =>
  state.officeApartaments.relatedOfficeIds[officeId];

export const getApartamentByOfficeId = (state, officeId) =>
  state.officeApartaments.byId[getApartamentIdByOfficeId(state, officeId)];
