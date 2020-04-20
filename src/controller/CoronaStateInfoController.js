const CoronaStateInfoService = require('../service/CoronaStateInfoService');

module.exports = class CoronaStateInfoController {
  constructor() {
    this.coronaStateInfoService = new CoronaStateInfoService();
  }

  async getHistoricalData(req, res) {
    const requestBody = req.body;

    // ensure request body is valid
    try {
      this.coronaStateInfoService.validateRequestBody(requestBody);
    } catch (exception) {
      return res.status(400).json({ Error: exception.message });
    }

    // collect and return historical data
    try {
      const getHistoricalDataResponse = await this.coronaStateInfoService.getHistoricalData(
        requestBody.state.toLowerCase(), requestBody.daysBack,
      );
      return res.status(200).send(getHistoricalDataResponse);
    } catch (exception) {
      return res.status(500).json({ Error: exception.message });
    }
  }
};
