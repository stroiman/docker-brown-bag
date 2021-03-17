const { setWorldConstructor } = require("@cucumber/cucumber");

class World {
  constructor({ attach, log, parameters }) {
    this.attach = attach
    this.log = log
    this.parameters = parameters
  }
}

setWorldConstructor(World);
