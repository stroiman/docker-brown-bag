import { setWorldConstructor } from "@cucumber/cucumber";
import { Product } from "./entities/Product";

class World {
  constructor({ attach, log, parameters }) {
    this.attach = attach
    this.log = log
    this.parameters = parameters
  }

  addProducts(products) {
    console.log("*******************", products);
    for(const product of products) {
      if (!(product instanceof Product)) {
        throw new TypeError("Expected Product type");
      }
    }
  }
}

setWorldConstructor(World);
