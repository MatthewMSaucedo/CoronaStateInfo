const express = require('express');
const CoronaStateInfoApplication = require('./src/CoronaStateInfoApplication');

const port = 3000;
const app = express();
const coronaStateInfoApplication = new CoronaStateInfoApplication(app, port);

// launch application
coronaStateInfoApplication.run();
