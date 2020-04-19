module.exports = class CoronaStateInfoController {
  static getHistoricalData(req, res) {
    return res.status(200).json({ response: 'getHistoricalData works!' });
  }

  static getInfectionRate(req, res) {
    return res.status(200).json({ response: 'getInfectionRate works!' });
  }
};
