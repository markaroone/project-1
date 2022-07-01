import moment from 'moment';

const getStartEndToday = () => {
  const start = moment().startOf('day').toISOString();
  const end = moment().endOf('day').toISOString();

  return { start, end };
};

export default getStartEndToday;
