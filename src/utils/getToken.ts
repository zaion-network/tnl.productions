export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) return atob(token);
  else return false;
};
