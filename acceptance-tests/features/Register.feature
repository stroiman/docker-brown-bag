Feature: Register user

    Scenario: Register user
        Given I am not logged in
        When I create a user with email "john.doe@example.com"
        Then a welcome email is sent to "john.doe@example.com"
