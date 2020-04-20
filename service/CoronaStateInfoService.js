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
    stateCountyInfo.forEach((stateCounty, i) => {
      const date = validDates[i];
      if (i === 0) {
        stateDailyInfo[date] = {};
        stateDailyInfo[date].cases += stateCounty.timeline.cases[date];
        stateDailyInfo[date].deaths += stateCounty.timeline.deaths[date];
      } else {
        stateDailyInfo[date].cases += stateCounty.timeline.cases[date];
        stateDailyInfo[date].deaths += stateCounty.timeline.deaths[date];
      }
    });

    console.log();
    return stateDailyInfo;
  }

  getDatesInRange(daysBack) {
    const date = new Date();
    const datesInRange = [];

    for (let i = 1; i <= daysBack; i += 1) {
      date.setDate(date.getDate() - i);
      datesInRange[i - 1] = this.getValidDateString(date);
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
