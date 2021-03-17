const { When, Then } = require("@cucumber/cucumber");

When("I place an order with the following items", (table) => "pending");

Then("the order has a total price of ${int}", (expectedPrice) => "pending");
