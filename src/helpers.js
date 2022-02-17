export const getFormattedDateString = (date) => {
  return date.toISOString().replace('T', ' ').split('.')[0];
};

export const areDatesOnSameDay = (date1, date2) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

export const getDaysApart = (date1, date2) => {
  const timeDifference = date1.getTime() - date2.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  return daysDifference;
};

export const setBodyText = (text) => {
  document.body.innerText = text;
};
