Feature: Parabank Sample Scenarios

As a valid Internet Banking customer
In order to do transactions
I want to login into ZeroWebSecurity App

Scenario: Login Successful

  Given I am in the login page
  When I try to login with valid credentials
  Then I should be able to login successfully

Scenario: Bill payment

  Given I am in the Accounts overview page
  When I try to do a payment for a bill
  Then I should be able to pay successfully