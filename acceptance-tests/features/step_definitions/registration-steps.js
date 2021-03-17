const { Given, When, Then } = require("@cucumber/cucumber");

Given('I am not logged in', () => {});

When('I create a user with email {string}', (email) => {
  return "pending";
});

Then('a welcome email is sent to {string}', (email) => {
  return "pending";
});
