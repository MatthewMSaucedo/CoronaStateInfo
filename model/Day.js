module.exports = class Day {
  constructor(date, cases, deaths) {
    this.date = date;
    this.cases = cases;
    this.deaths = deaths;
  }

  get date() {
    return this.date;
  }

  set date(date) {
    this.date = date;
  }

  get cases() {
    return this.cases;
  }

  set cases(cases) {
    this.cases = cases;
  }

  get deaths() {
    return this.deaths;
  }

  set deaths(deaths) {
    this.deaths = deaths;
  }
};
