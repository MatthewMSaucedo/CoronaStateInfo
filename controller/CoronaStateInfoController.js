const CoronaStateInfoService = require('../service/CoronaStateInfoService');

module.exports = class CoronaStateInfoController {
  constructor() {
    this.coronaStateInfoService = new CoronaStateInfoService();
  }

  async getHistoricalData(req, res) {
    return res.status(200).send(await this.coronaStateInfoService.getHistoricalData('florida', 2));
  }

  static getInfectionRate(req, res) {
    return res.status(200).json({ response: 'getInfectionRate works!' });
  }
};
