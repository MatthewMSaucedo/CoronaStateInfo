const router = require('./routing/router');
const routeConstants = require('./routing/routeConstants');

module.exports = class CoronaStateInfoApplication {
  constructor(app, port) {
    this.app = app;
    this.port = port;
  }

  run() {
    // expose application at specified port
    this.app.listen(
      this.port, () => console.log(`CoronaStateInfoApplication listening at http://localhost:${this.port}`),
    );

    return this.app.use(routeConstants.baseApiRoute, router);
  }
};
