const { Given, When, Then } = require("@cucumber/cucumber");
const _ = require('lodash');

const parseMoney = input => {
  const matches = input.match(/^([A-Z]+) (\d+)$/);
  return new Money({ currency: matches[1], amount: parseFloat(matches[2]) });
}

Given('the following products exist', function(dataTable) {
  const data = dataTable
    .hashes()
    .map(input => _.update(input, 'Price', parseMoney))
    .map(createProduct)
});

const isString = input => typeof(input) === "string";
const isNumber = input => typeof(input) === "number";
const isCurrency = input => /^[A-Z]+$/.test(input);
const isInstanceOf = cls =>  input => input instanceof cls;

/**
 * creates a DTO class that validates the input based
 * on the specifications passed.
 */
const createDto = (spec) => function(data) {
  if (typeof(data) !== "object") throw new TypeError("data must be an object");
  if (data === null) throw new TypeError ("data must not be null");

  console.log("DATA", data);
  for([key, validator] of _(spec).toPairs()) {
    if (!validator(data[key])) throw new TypeError(`${key} was ${data[key]}`);
    this[key] = data[key];
  }
}

const Money = createDto({
  currency: isCurrency,
  amount: isNumber
});

const isMoney = isInstanceOf(Money);

const Product = createDto({
  sku: isString,
  name: isString,
  price: isMoney
});

const createProduct = (input) => {
  return new Product(_.mapKeys(input, (_,key) => key.toLowerCase()));
}
