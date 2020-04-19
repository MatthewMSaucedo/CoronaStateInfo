const express = require('express');
const router = require('./router');
const routeConstants = require('./routeConstants');

const port = 3000;
const app = express();

app.use(routeConstants.baseApiRoute, router);

app.listen(
  port, () => console.log(`CoronaStateInfo listening at http://localhost:${port}`),
);
