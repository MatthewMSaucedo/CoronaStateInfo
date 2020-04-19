const router = require('./routing/router');
const routeConstants = require('./routing/routeConstants');

module.exports = class CoronaStateInfoApplication {
  constructor(app) {
    this.app = app;
  }

  run() {
    return this.app.use(routeConstants.baseApiRoute, router);
  }
};
