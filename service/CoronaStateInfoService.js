const NOVELCovidService = require('./NOVELCovidService');

module.exports = class CoronaStateInfoService {
  constructor() {
    this.novelCovidService = new NOVELCovidService();
  }

  async getHistoricalData(state, daysBack) {
    const stateCountyInfo = await NOVELCovidService.getStatesCountyCovidInfo(state, daysBack);
    const validDates = this.getDatesInRange(daysBack);
    const stateDailyInfo = {};

    // parse stateCountyInfo into stateDailyInfo
    for (let j = 0; j < validDates.length; j += 1) {
      const date = validDates[j];
      for (let i = 0; i < stateCountyInfo.length; i += 1) {
        if (i === 0) {
          stateDailyInfo[date] = {};
          stateDailyInfo[date].cases = stateCountyInfo[i].timeline.cases[date];
          stateDailyInfo[date].deaths = stateCountyInfo[i].timeline.deaths[date];
        } else {
          stateDailyInfo[date].cases += stateCountyInfo[i].timeline.cases[date];
          stateDailyInfo[date].deaths += stateCountyInfo[i].timeline.deaths[date];
        }
      }
    }

    console.log();
    return stateDailyInfo;
  }

  getDatesInRange(daysBack) {
    const datesInRange = [];

    for (let i = 1; i <= daysBack; i += 1) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      datesInRange[i - 1] = this.constructor.getValidDateString(date);
    }
    return datesInRange;
  }

  static getValidDateString(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = 20;
    const validDateString = `${month}/${day}/${year}`;
    return validDateString;
  }
};
