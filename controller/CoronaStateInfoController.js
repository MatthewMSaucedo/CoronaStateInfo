module.exports = class CoronaStateInfoController {
  static async getHistoricalData(req, res) {
    return res.status(200).send({ response: 'getHistoricalData works!' });
  }

  static getInfectionRate(req, res) {
    return res.status(200).json({ response: 'getInfectionRate works!' });
  }
};
