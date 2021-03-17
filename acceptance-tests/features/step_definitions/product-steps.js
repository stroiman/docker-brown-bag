const { Given, When, Then } = require("@cucumber/cucumber");
const _ = require('lodash');
const { Money, Product } = require("../support/entities/Product");

const parseMoney = input => {
  const matches = input.match(/^([A-Z]+) (\d+)$/);
  return new Money({ currency: matches[1], amount: parseFloat(matches[2]) });
}

Given('the following products exist', function(dataTable) {
  const products = dataTable
    .hashes()
    .map(input => _.update(input, 'Price', parseMoney))
    .map(createProduct)
  this.addProducts(products);
});

const createProduct = (input) => {
  return new Product(_.mapKeys(input, (_,key) => key.toLowerCase()));
}
