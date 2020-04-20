const axios = require('axios');
const routeConstants = require('../routing/routeConstants');

module.exports = class NOVELCovidService {
  /*
   * This API call returns an array of usaCounty
   *
   * usaCounty {
   *   province: string,
   *   county: string,
   *   timeline: TimeLine
   * }
   *
   * TimeLine {
   *   cases: DayInfo
   *   deaths: DayInfo
   * }
   *
   * (n here represents daysBack)
   * DayInfo {
   *   dd-n/mm-n/yy-n: number
   *   ...
   *   dd/mm/yy: number
   * }
   */
  static async getStatesCountyCovidInfo(state, daysBack) {
    const requestUrl = routeConstants.getStatesCountyCovidInfoRoute + state;
    const query = {};
    query.lastdays = daysBack;

    try {
      const getStatesCountyCovidInfoResponse = await axios.get(requestUrl, { params: query });
      return getStatesCountyCovidInfoResponse.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};
