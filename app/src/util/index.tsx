export const formatDate = (date: string) => {
  const calendar = date.split("T")[0];
  const time = date.split("T")[1].split(".")[0];
  return `${calendar} at ${time}`;
}