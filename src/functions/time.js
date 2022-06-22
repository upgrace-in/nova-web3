export const getCurrentTime = () => {
  const hours = new Date().getHours() <= 9 ? `0${new Date().getHours()}` : new Date().getHours();
  const minutes = new Date().getMinutes() <= 9 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
  return `${hours}:${minutes}`;
};
export const getCurrentDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  return mm + "/" + dd + "/" + yyyy;
};
