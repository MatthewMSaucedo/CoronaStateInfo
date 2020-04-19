module.exports = class State {
  constructor(name, days) {
    this.name = name;
    this.days = days;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

  get days() {
    return this.days;
  }

  set days(days) {
    this.days = days;
  }
};
