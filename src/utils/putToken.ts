export const putToken = (serialized: string) => {
  localStorage.setItem("token", btoa(serialized));
};
