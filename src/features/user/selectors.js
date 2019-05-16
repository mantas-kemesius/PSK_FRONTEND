export const isAuth = () => !!localStorage.getItem("jwt");
export const getJWToken = () => localStorage.getItem("jwt");
