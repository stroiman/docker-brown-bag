const { setWorldConstructor } = require("@cucumber/cucumber");
const { Product } = require("./entities/Product");

class World {
  constructor({ attach, log, parameters }) {
    this.attach = attach
    this.log = log
    this.parameters = parameters
  }

  addProducts(products) {
    for(const product of products) {
      if (!product instanceof Product) {
        throw new TypeError("Expected Product type");
      }
    }
  }
}

setWorldConstructor(World);
