Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link

@test2 
  Scenario: Login should be success
    And User enter the username as "ortoni11"
    And User enter the password as "Pass1234"
    When User click on the login button
    Then Login should be success

@test @flaky
  Scenario: Login should not be success
    Given User enter the username as "robert1"
    Given User enter the password as "Password123"
    When User click on the login button
    But Login should fail
