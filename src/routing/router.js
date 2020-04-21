const express = require('express');
const routeConstants = require('./routeConstants');
const CoronaStateInfoController = require('../controller/CoronaStateInfoController');
const CoronaStateInfoService = require('../service/CoronaStateInfoService');
const NOVELCovidService = require('../service/NOVELCovidService');

const coronaStateInfoService = new CoronaStateInfoService(new NOVELCovidService());
const coronaStateInfoController = new CoronaStateInfoController(coronaStateInfoService);

const router = express.Router();

router.get(
  routeConstants.getHistoricalDataRoute,
  coronaStateInfoController.getHistoricalData.bind(coronaStateInfoController),
);

module.exports = router;
