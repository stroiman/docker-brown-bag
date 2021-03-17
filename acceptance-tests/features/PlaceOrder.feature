Feature: Register user
    Background: 
        Given the following products exist
            | SKU | Name               | Price |
            | dfd | Docker for Dummies | $1    |

    Scenario: Register user
        Given I am logged in as "john.doe@example.com"
        When I place an order with the following items 
            | SKU | Amount |
            | dfd | 42     |
        Then the order has a total price of $42
        And an order confirmation mail is sent to "john.doe@example.com"
