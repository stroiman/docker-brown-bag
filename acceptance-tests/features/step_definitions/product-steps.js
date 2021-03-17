const { Given, When, Then } = require("@cucumber/cucumber");

Given('the following products exist', function(dataTable) {
  console.log(dataTable.hashes());
});
