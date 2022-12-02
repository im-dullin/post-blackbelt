const makeDoubleDigit = (number) => {
  if (number >= 10) {
    return number;
  }
  return `0${number}`;
};

export const dateFormatter = (date) => {
  let dateObj = date;
  if (typeof date === "string") {
    dateObj = new Date(date);
  }

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  return `${year}-${makeDoubleDigit(month)}-${makeDoubleDigit(day)}`;
};

export const dateDiffInDays = (a, b) => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc1 - utc2) / MS_PER_DAY);
};

export const getFormattedToday = () => {
  return dateFormatter(new Date());
};
export const getYearAndMonth = (date) => {
  const fullDate = dateFormatter(date);
  return fullDate.slice(0, 7);
};
