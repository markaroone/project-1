const getDateRangeToday = () => {
  const dateToday = new Date().toISOString().slice(0, 10);
  const dateTommorow = new Date(new Date().getTime() + 8.64e7)
    .toISOString()
    .slice(0, 10);

  return [dateToday, dateTommorow];
};

module.exports = getDateRangeToday;
