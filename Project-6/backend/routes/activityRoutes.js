const express = require('express');
const activityController = require('../controllers/activityController');

const router = express.Router();

router.route('/all-records').get(activityController.getAllActivityRecords);

router
  .route('/running-records')
  .get(activityController.getAllActivities)
  .post();

router
  .route('/running-records/:id')
  .get(activityController.getUserActivities)
  .patch()
  .delete();

router
  .route('/cycling-records')
  .get(activityController.getAllActivities)
  .post();

router
  .route('/cycling-records/:id')
  .get(activityController.getUserActivities)
  .patch()
  .delete();

module.exports = router;
