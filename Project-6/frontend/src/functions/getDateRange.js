const getDateRange = (date1, days = 1) => {
  const day1 = new Date(date1).toISOString().slice(0, 10);

  const dayX = new Date(new Date(day1).getTime() + 8.64e7 * days)
    .toISOString()
    .slice(0, 10);

  return [day1, dayX];
};

module.exports = getDateRange;
