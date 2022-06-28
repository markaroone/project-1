const RunningActivity = require('../models/runningActivityModel');
const CyclingActivity = require('../models/cyclingActivityModel');
const APIFeatures = require('../utils/APIFeatures');

const modelToUse = (request) => {
  if (request.originalUrl.includes('running-records')) return RunningActivity;

  if (request.originalUrl.includes('cycling-records')) return CyclingActivity;
};

exports.getAllActivityRecords = async (request, response, next) => {
  const cyclingData = await CyclingActivity.find();
  const runningData = await RunningActivity.find();

  data = [...cyclingData, ...runningData];

  response.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
};

exports.getAllActivities = async (request, response, next) => {
  const model = modelToUse(request);

  const features = new APIFeatures(model.find(), request.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const data = await features.query;

  response.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
};

exports.getUserActivities = async (request, response, next) => {
  const model = modelToUse(request);

  const features = new APIFeatures(
    model.find({ userId: request.params.id }),
    request.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const activities = await features.query;

  response.status(200).json({
    status: 'success',
    results: activities.length,
    data: {
      activities,
    },
  });
};

exports.getActivityWithDates = async (request, response, next) => {
  const model = modelToUse(request);

  const {
    body: { min, max },
  } = request;

  const activities = await model
    .find({
      $expr: {
        $and: [
          { $lt: [{ $toDate: '$date.start' }, new Date(min)] },
          { $gt: [{ $toDate: '$date.start' }, new Date(max)] },
        ],
      },
    })
    .sort({ 'date.start': 1 });

  response.status(200).json({
    status: 'success',
    results: activities.length,
    data: {
      activities,
    },
  });
};
