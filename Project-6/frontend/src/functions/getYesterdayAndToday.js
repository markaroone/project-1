import moment from 'moment';

const getYesterdayAndToday = () => {
  const now = moment();
  const startOfToday = now.startOf('day').toISOString();
  const endOfToday = now.endOf('day').toISOString();

  const yesterday = now.subtract(1, 'days');
  const startOfYesterday = yesterday.startOf('day').toISOString();
  const endOfYesterday = yesterday.endOf('day').toISOString();

  return {
    yesterday: {
      start: startOfYesterday,
      end: endOfYesterday,
    },
    today: {
      start: startOfToday,
      end: endOfToday,
    },
  };
};

export default getYesterdayAndToday;
