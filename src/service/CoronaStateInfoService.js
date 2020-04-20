const NOVELCovidService = require('./NOVELCovidService');

module.exports = class CoronaStateInfoService {
  constructor() {
    this.novelCovidService = new NOVELCovidService();
  }

  async getHistoricalData(state, daysBack) {
    const stateCoronaInformation = {};
    stateCoronaInformation.name = state;

    const stateCountyInfo = await NOVELCovidService.getStatesCountyCovidInfo(state, daysBack);
    stateCoronaInformation.days = this.getStateDailyInfo(stateCountyInfo, daysBack);

    return stateCoronaInformation;
  }

  getStateDailyInfo(stateCountyInfo, daysBack) {
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

  validateRequestBody(requestBody) {
    this.constructor.throwIfBodyMissingField(requestBody);
    this.constructor.throwIfStateSpellingIncorrect(requestBody.state);
    if (!Number.isInteger(requestBody.daysBack)) {
      throw new Error('Bad Request: daysBack field must be a number.');
    }
  }

  static throwIfBodyMissingField(requestBody) {
    if (requestBody.state === undefined && requestBody.daysBack === undefined) {
      throw new Error('Bad Request: body missing state and daysBack field.');
    } else if (requestBody.state === undefined) {
      throw new Error('Bad Request: body missing state field.');
    } else if (requestBody.daysBack === undefined) {
      throw new Error('Bad Request: body missing daysBack field.');
    }
  }

  static throwIfStateSpellingIncorrect(state) {
    const validStateSet = {};
    validStateSet['american samoa'] = true;
    validStateSet.guam = true;
    validStateSet['northern mariana islands'] = true;
    validStateSet['puerto rico'] = true;
    validStateSet['virgin islands'] = true;
    validStateSet.alabama = true;
    validStateSet.alaska = true;
    validStateSet.arizona = true;
    validStateSet.arkansas = true;
    validStateSet.california = true;
    validStateSet.colorado = true;
    validStateSet.connecticut = true;
    validStateSet.delaware = true;
    validStateSet['district of columbia'] = true;
    validStateSet.florida = true;
    validStateSet.georgia = true;
    validStateSet.hawaii = true;
    validStateSet.idaho = true;
    validStateSet.illinois = true;
    validStateSet.indiana = true;
    validStateSet.iowa = true;
    validStateSet.kansas = true;
    validStateSet.kentucky = true;
    validStateSet.louisiana = true;
    validStateSet.maine = true;
    validStateSet.maryland = true;
    validStateSet.massachusetts = true;
    validStateSet.michigan = true;
    validStateSet.minnesota = true;
    validStateSet.mississippi = true;
    validStateSet.missouri = true;
    validStateSet.montana = true;
    validStateSet.nebraska = true;
    validStateSet.nevada = true;
    validStateSet['new hampshire'] = true;
    validStateSet['new jersey'] = true;
    validStateSet['new mexico'] = true;
    validStateSet['new york'] = true;
    validStateSet['north carolina'] = true;
    validStateSet['north dakota'] = true;
    validStateSet.ohio = true;
    validStateSet.oklahoma = true;
    validStateSet.oregon = true;
    validStateSet.pennsylvania = true;
    validStateSet['rhode island'] = true;
    validStateSet['south carolina'] = true;
    validStateSet['south dakota'] = true;
    validStateSet.tennessee = true;
    validStateSet.texas = true;
    validStateSet.utah = true;
    validStateSet.vermont = true;
    validStateSet.virginia = true;
    validStateSet.washington = true;
    validStateSet['west virginia'] = true;
    validStateSet.wisconsin = true;
    validStateSet.wyoming = true;
    validStateSet['diamond princess'] = true;
    validStateSet['grand princess'] = true;

    if (!validStateSet[state]) {
      throw new Error(`Bad Request: "${state}" is not a valid spelling of a US state.`);
    }
  }
};
