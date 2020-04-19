const express = require('express');
const routeConstants = require('./routeConstants');
const coronaStateInfoController = require('./controller/CoronaStateInfoController');

const router = express.Router();

router.get(routeConstants.getHistoricalDataRoute, coronaStateInfoController.getHistoricalData);
router.get(routeConstants.getInfectionRateRoute, coronaStateInfoController.getInfectionRate);

module.exports = router;
