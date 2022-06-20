# Feature: The Internet Guinea Pig Website

#   Scenario Outline: As a user, I can log into the secure area

#     Given I am on the login page
#     When I login with <username> and <password>
#     Then I should see a flash message saying <message>

#     Examples:
#       | username | password             | message                        |
#       | tomsmith | SuperSecretPassword! | You logged into a secure area! |
#       | foobar   | barfoo               | Your username is invalid!      |

Feature: Login Feature

  Scenario: User redirect to identifi login page
    Given user is in navigate to welcome page
    When user click Get Started button
    Then user should be redirect to login page

  Scenario: User logs in with unregistered email
    When user enter unregistered email
    And user click "Log in" button
    Then user should see "Please enter a valid email address" message

  Scenario: User logs in with registered email
    When enter registered email
    And user click "Log in" button
    Then user should see password field

  Scenario: User logs in with invalid password
    When user input invalid password
    And user click "Log in" button
    Then user should see "The email or password you entered is incorrect." message

  Scenario: User logs in with valid password
    When user input valid password
    And user click "Log in" button
    Then user should redirect to dashboard page