const NOVELCovidService = require('./NOVELCovidService');

module.exports = class CoronaStateInfoService {
  constructor() {
    this.novelCovidService = new NOVELCovidService();
  }

  static hello() {
    return 'hello world';
  }

  static getHistoricalData(state, daysBack) {
    return NOVELCovidService.getStatesCountyCovidInfo(state, daysBack);
  }
};
