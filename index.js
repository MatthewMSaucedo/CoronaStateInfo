const express = require('express');
const CoronaStateInfoApplication = require('./CoronaStateInfoApplication');

const port = 3000;
const app = express();
const coronaStateInfoApplication = new CoronaStateInfoApplication(app);

// launch application
coronaStateInfoApplication.run();

// expose application at specified port
app.listen(
  port, () => console.log(`CoronaStateInfoApplication listening at http://localhost:${port}`),
);
