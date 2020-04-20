const express = require('express');
const routeConstants = require('./routeConstants');
const CoronaStateInfoControllerClass = require('../controller/CoronaStateInfoController');

const coronaStateInfoController = new CoronaStateInfoControllerClass();

const router = express.Router();

router.get(
  routeConstants.getHistoricalDataRoute,
  coronaStateInfoController.getHistoricalData.bind(coronaStateInfoController),
);
router.get(
  routeConstants.getInfectionRateRoute,
  CoronaStateInfoControllerClass.getInfectionRate,
);

module.exports = router;
