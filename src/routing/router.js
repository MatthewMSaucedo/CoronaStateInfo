const express = require('express');
const routeConstants = require('./routeConstants');
const CoronaStateInfoController = require('../controller/CoronaStateInfoController');

const coronaStateInfoController = new CoronaStateInfoController();

const router = express.Router();

router.get(
  routeConstants.getHistoricalDataRoute,
  coronaStateInfoController.getHistoricalData.bind(coronaStateInfoController),
);

module.exports = router;
