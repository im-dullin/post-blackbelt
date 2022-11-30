export const dateFormatter = (date) => {
  let dateObj = date;
  if (typeof date === "string") {
    dateObj = new Date(date);
  }
  return `${dateObj.getFullYear()}-${
    dateObj.getMonth() + 1
  }-${dateObj.getDate()}`;
};

export const dateDiffInDays = (a, b) => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc1 - utc2) / MS_PER_DAY);
};
